const outline = () =>{
    
document.querySelector(".bt").style.outlineStyle = "solid";
document.querySelector(".bt").style.outlineWidth = "5px"
document.querySelector(".bt").style.outlineColor = "#4477CE"
}






  const list1 = document.querySelector(".bt").addEventListener('click',outline);
  var  comments = [
    {   
        id: 1,
        title: 'WTF are you talking about?',
        author: 'Jayant',
        content: 'I am the king of the jungle',
        comment: [
            {
                author: 'Jaya',
                content: 'Hi what is up',
            },
            {
                author: 'Prada',
                content: 'WTF',
            }

        ]
    },
    {
        id: 2,
        title: 'Is anyone here',
        author: 'Ankur',
        content: 'Do you have any sense, are you mad',
        comment: [
            {
                author: 'Jaya',
                content: 'Hi what is up',
            },
            {
                author: 'Prada',
                content: 'WTF',
            }

        ]
    }
]

var id = window.location.search.slice(1);
var com = comments.find(t => t.id);

const cont = document.querySelector('.hard');
for (let com of comments){


var html = `
    <div class="c1">
        <h1>${com.title}</h1>
        <p>${com.content}</p>
        <hr>
        <div class="comment">
            <div style="display: flex; align-items: center;">
                <img src="./dog-img.jpg">
                <p style="margin-left: 10px;">Posted by <span style="color: #4477CE;">${com.author}</span></p>
            </div>
            <a href="comment/comments.html?${com.id}">
                <div style="display: flex; align-items: center;">
                    <button type="submit" class="btn">
                        <i class="fa-solid fa-plus"></i> Add Comment
                    </button><i class="fa-regular fa-message">  ${com.comment.length}+</i></a>
                </div>
            </div>
        </div>
  `
  cont.insertAdjacentHTML("beforeend", html);
};


