//your JS code here. If required.

const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = form.name.value.trim()
    const age = form.age.value.trim()

    // validation
    if(name == '' || age == ''){
        alert('Please enter valid details')
        return
    }

    // create a promise
   const votingPromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Number(age) > 18) {
                        resolve(`Welcome, ${name}. You can vote.`);
                    } else {
                        reject(`Oh sorry ${name}. You aren't old enough.`);
                    }
                }, 2000);
            });

    votingPromise
        .then((message) => {
            alert(message);
        })
        .catch((error) => {
            alert(error);
        });
})
    