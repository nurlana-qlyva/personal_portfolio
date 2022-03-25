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