'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/AuthContext';
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  updateDoc,
  arrayUnion,
  arrayRemove,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface Comment {
  id: string;
  userId: string;
  userName: string;
  userPhoto: string;
  text: string;
  timestamp: Timestamp;
  likes: string[];
}

export default function Comments() {
  const { user, signInWithGoogle } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const q = query(collection(db, 'comments'), orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const commentsData: Comment[] = [];
      snapshot.forEach((doc) => {
        commentsData.push({ id: doc.id, ...doc.data() } as Comment);
      });
      setComments(commentsData);
    });

    return unsubscribe;
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newComment.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'comments'), {
        userId: user.uid,
        userName: user.displayName || 'Anonymous',
        userPhoto: user.photoURL || '',
        text: newComment.trim(),
        timestamp: serverTimestamp(),
        likes: [],
      });
      setNewComment('');
    } catch (error) {
      console.error('Error adding comment:', error);
      alert('Failed to post comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (commentId: string) => {
    if (!window.confirm('Are you sure you want to delete this comment?')) return;

    try {
      await deleteDoc(doc(db, 'comments', commentId));
    } catch (error) {
      console.error('Error deleting comment:', error);
      alert('Failed to delete comment. Please try again.');
    }
  };

  const handleLike = async (commentId: string, currentLikes: string[]) => {
    if (!user) {
      signInWithGoogle();
      return;
    }

    const commentRef = doc(db, 'comments', commentId);
    const isLiked = currentLikes.includes(user.uid);

    try {
      if (isLiked) {
        await updateDoc(commentRef, {
          likes: arrayRemove(user.uid),
        });
      } else {
        await updateDoc(commentRef, {
          likes: arrayUnion(user.uid),
        });
      }
    } catch (error) {
      console.error('Error updating like:', error);
    }
  };

  const formatTimestamp = (timestamp: Timestamp) => {
    if (!timestamp) return 'Just now';
    const date = timestamp.toDate();
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;

    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-6">
      <h2 className="text-2xl font-light mb-8 text-center">Comments</h2>

      {/* Add Comment Form */}
      {user ? (
        <form onSubmit={handleSubmit} className="mb-8">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            rows={3}
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-black/20 rounded-lg focus:outline-none focus:border-black/40 resize-none disabled:opacity-50"
          />
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              disabled={isSubmitting || !newComment.trim()}
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-black/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm"
            >
              {isSubmitting ? 'Posting...' : 'Post Comment'}
            </button>
          </div>
        </form>
      ) : (
        <div className="mb-8 text-center py-8 border border-black/10 rounded-lg">
          <p className="text-gray-600 mb-3">Sign in to add a comment</p>
          <button
            onClick={signInWithGoogle}
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-black/80 transition-all text-sm"
          >
            Sign In with Google
          </button>
        </div>
      )}

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment) => {
            const isLiked = user && comment.likes.includes(user.uid);
            const isOwner = user && comment.userId === user.uid;

            return (
              <div key={comment.id} className="border border-black/10 rounded-lg p-4">
                {/* User Info */}
                <div className="flex items-start gap-3 mb-3">
                  {comment.userPhoto && (
                    <img
                      src={comment.userPhoto}
                      alt={comment.userName}
                      className="w-10 h-10 rounded-full border border-gray-300"
                    />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-sm">{comment.userName}</p>
                      <span className="text-xs text-gray-500">
                        {formatTimestamp(comment.timestamp)}
                      </span>
                    </div>
                  </div>
                  {isOwner && (
                    <button
                      onClick={() => handleDelete(comment.id)}
                      className="text-xs text-red-600 hover:text-red-800 underline"
                    >
                      Delete
                    </button>
                  )}
                </div>

                {/* Comment Text */}
                <p className="text-sm leading-relaxed mb-3 whitespace-pre-wrap">{comment.text}</p>

                {/* Like Button */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleLike(comment.id, comment.likes)}
                    className={`flex items-center gap-1 text-sm transition-colors ${
                      isLiked ? 'text-red-600' : 'text-gray-600 hover:text-red-600'
                    }`}
                  >
                    <span>{isLiked ? '❤️' : '🤍'}</span>
                    <span>{comment.likes.length}</span>
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
