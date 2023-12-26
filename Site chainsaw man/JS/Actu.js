document.addEventListener('DOMContentLoaded', function () {
    const posts = document.querySelectorAll('.post');
    let currentIndex = 0;

    function showPosts() {
        posts.forEach(post => post.style.display = 'none');
        const currentPost = posts[currentIndex];
        currentPost.style.display = 'block';
    }

    posts.forEach(post => {
        post.addEventListener('click', function () {
            currentIndex = (currentIndex + 1) % posts.length;
            showPosts();
        });
    });

    showPosts();
});
