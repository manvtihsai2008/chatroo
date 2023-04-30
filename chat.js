// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCBhzquiZORigHeJnt0MQqe0tFLZqr1oik",
    authDomain: "chatro-73875.firebaseapp.com",
      databaseURL: "https://chatro-73875-default-rtdb.firebaseio.com",
        projectId: "chatro-73875",
          storageBucket: "chatro-73875.appspot.com",
            messagingSenderId: "623513120954",
              appId: "1:623513120954:web:85e5341fd4d256a1c6d283"
              };

              // Initialize Firebase
              firebase.initializeApp(firebaseConfig);

              // Get elements
              const messageForm = document.getElementById("message-form");
              const messageInput = document.getElementById("message-input");
              const messages = document.getElementById("messages");

              // Create a reference to the Firebase Realtime Database
              const database = firebase.database();

              // Listen for new messages and add them to the chat
              database.ref("messages").on("child_added", function(snapshot) {
                const message = snapshot.val();
                  const li = document.createElement("li");
                    li.innerHTML = `<b>${message.name}: </b>${message.text}`;
                      messages.appendChild(li);
                      });

                      // Listen for form submissions and add messages to the Firebase Realtime Database
                      messageForm.addEventListener("submit", function(event) {
                        event.preventDefault();
                          const name = firebase.auth().currentUser.displayName;
                            const text = messageInput.value;
                              database.ref("messages").push({
                                  name: name,
                                      text: text
                                        });
                                          messageInput.value = "";
                                          });