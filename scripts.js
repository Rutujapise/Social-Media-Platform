document.getElementById('submit-post').addEventListener('click', function() {
    const content = document.getElementById('post-content').value;
    if (content) {
        fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content })
        }).then(response => response.json())
          .then(data => {
              const post = document.createElement('div');
              post.className = 'post';
              post.innerHTML = `<p>${data.content}</p>`;
              document.getElementById('posts').prepend(post);
              document.getElementById('post-content').value = '';
          });
    }
});
