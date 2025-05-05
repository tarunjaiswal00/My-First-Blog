function addComment() {
    let commentInput = document.getElementById("commentInput");
    let commentList = document.getElementById("commentList");

    if (commentInput.value !== "") {
        let newComment = document.createElement("li");
        newComment.textContent = commentInput.value;
        commentList.appendChild(newComment);
        commentInput.value = "";
    }
}
