import React from "react";
import '/src/styles/articles.css';
const ShowArticles: React.FC = () => {
    return (
        <div>
            <a href="https://example.com" style={{ textDecoration: 'none', color: '#007bff', fontSize: '18px' }}>
                超链接内容
            </a>
        </div>
    )
}

export default ShowArticles;
