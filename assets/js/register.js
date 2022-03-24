import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getDatabase, ref, set, push, onValue, update, remove, get} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyAEM4oBwZLlBWbeAbJY1tGzjqUusYeF4tU",
    authDomain: "portfolio-5e9a0.firebaseapp.com",
    projectId: "portfolio-5e9a0",
    storageBucket: "portfolio-5e9a0.appspot.com",
    messagingSenderId: "755620905787",
    appId: "1:755620905787:web:1a32cd0d68108cda5f2d1e",
    measurementId: "G-2BCMT3082W"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export{ref, set, push, onValue, update, remove, get};

// elaqe sehifesindeki melumarin daxil edilmesi ucun

const registerBranch = ref(db, '/portfolio');

$('#registerBtn').on('click', function(e){
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var subject = $('#msg_subject').val();
    var message = $('#message').val();

    var registerArr = push(registerBranch);

    set(registerArr, {
        name,
        email,
        subject,
        message
    })
});

onValue(registerBranch, function(snapshot){
    var objBanner = snapshot.val();

    console.log(objBanner)
    
    var tbody = document.querySelector("#push-inner");
    tbody.innerHTML = '';
    var count = 0;

    for(let [key,value] of Object.entries(objBanner)){ 
        var tr = document.createElement('tr');

        var nameTd = document.createElement('td');
        var emailTd = document.createElement('td');
        var subjectTd = document.createElement('td');
        var messageTd = document.createElement('td');

        var edit = document.createElement('td');
        var tdcount = document.createElement('td');

        nameTd.innerHTML = value.name;
        emailTd.innerHTML = value.email;
        subjectTd.innerHTML = value.subject;
        messageTd.innerHTML = value.message;

        count++;
        tdcount.innerHTML = count;

        nameTd.dataset.key = key;

        edit.innerHTML = '<i class="fas fa-trash-alt"></i>';
        edit.classList.add('delete-btn');

        tr.append(count);
        tr.append(nameTd);
        tr.append(emailTd);
        tr.append(subjectTd);
        tr.append(messageTd);
        tr.append(edit);

        tbody.append(tr);

        edit.dataset.key = key;

        edit.onclick = function(){
            remove(ref(db, '/portfolio/' + this.dataset.key));
        }
    }
});