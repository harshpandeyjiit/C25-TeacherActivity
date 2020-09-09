var firebaseConfig = {
    apiKey: "AIzaSyA9F6zriCDRHGeu-LwJ83CplHUKkQVCr0M",
    authDomain: "corona-9e261.firebaseapp.com",
    databaseURL: "https://corona-9e261.firebaseio.com",
    projectId: "corona-9e261",
    storageBucket: "corona-9e261.appspot.com",
    messagingSenderId: "694830677499",
    appId: "1:694830677499:web:b9382e363351f4b3701f5e"
  };

  firebase.initializeApp(firebaseConfig);
  //refer messages
  var messagesRef=firebase.database().ref('messages')
//listen for form submit
document.getElementById('testForm').addEventListener('submit',submitForm);
function submitForm(e){
    e.preventDefault();
    var name =getInputVal('name');
    var mobile =getInputVal('mobile');
    var age =getInputVal('age');
    var state =getInputVal('state');
    state=state.toLowerCase();
    var email =getInputVal('email');
    var profession =getInputVal('profession');
    var dateofbirth =getInputVal('dateofbirth');
    var centers=deploystates(state);
    saveMessages(name,mobile,age,email,profession,dateofbirth,centers);
}

function deploystates(state)
{
    if(state=="delhi")
    {
        var centers=["OKHLA","AIIMS","TILAK NAGAR","KAROL BAGH","CONNAUGHT PLACE"];
        return centers;
    }
    else if(state=="maharashtra")
    {
        var centers=["MUMBAI","PUNE","NAGPUR","RATNAGIRI","AURANGABAD"];
        return centers;
    }
    else if(state=="uttarakhand")
    {
        var centers=["DEHRADUN","HARIDWAR","HALDWANI","ALMORA","RISHIKESH"];
        return centers;
    }
    else if(state=="haryana")
    {
        var centers=["GURGAON","CHANDIGARH","SONEPAT","REWARI","KURUKSHETRA"];
        return centers;
    }
}
function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessages(name,mobile,age,email,profession,dateofbirth,state){
    var newMessagesRef = messagesRef.push();
    newMessagesRef.set({
        name:name,
        mobile:mobile,
        age:age,
        email:email,
        profession:profession,
        state:state,
        dateofbirth:dateofbirth
    })
    document.getElementById("result").innerHTML ="<br>"+state[0]+"<br>"+state[1]+"<br>"+state[2]+"<br>"+state[3]+"<br>"+state[4]+"<br>";;
}
