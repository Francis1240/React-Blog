import React from 'react';

const UpvotesSection = ({ articleName , upvotes, setArticleInfo}) => {
    
    const upvoteArticle = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'POST',
        });
        const body = await result.json();
        setArticleInfo(body);
    };


    return (
    <div id="upvote_section">
    <p>This post has been upvoted {upvotes} times.</p>
    <button onClick={upvoteArticle}>Upvote</button>
    </div>
)};

export default UpvotesSection;