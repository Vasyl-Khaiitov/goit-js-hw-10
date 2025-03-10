import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");
const inputNumber = document.querySelector('input[name="delay"]');
const buttonCreate = document.querySelector('button[type="submit"]');

buttonCreate.addEventListener("click", onClick);

function onClick(event) {
    event.preventDefault(); 
    
    const useDelay = parseInt(inputNumber.value);
    const chekedState = document.querySelector('input[name="state"]:checked');
    
    if (isNaN(useDelay) || useDelay <= 0) {
        iziToast.show({
               title: "⏱️",
            message: "Pleas to write times ",
            position: "topRight",
            color: "orange"
        })
        return;
    }
    
    if (!chekedState) {
        iziToast.show({
             title: "❗",
            message: "Pleas to one of the options ",
            position: "topRight",
            color: "yellow"
        })
        return;
    }



    const stateValue = chekedState.value;

    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (stateValue === "fulfilled") {
                resolve(useDelay);
            } else {
                reject(useDelay);
            }
        }, useDelay);
    }).then((delay) => {
        console.log(`✅ Fulfilled promise in ${delay}ms`);

        iziToast.show({
            title: "✅",
            message: `Fulfilled promise in ${delay} ms`,
            position: "topRight",
            color: "green"
        });

        form.reset();
        
    }).catch((delay) => {
        console.log(`❌ Rejected promise in ${delay}ms`);
        
        iziToast.show({
            title: "❌",
            message: `Rejected promise in ${delay} ms`,
            position: "topRight",
            color: "red"
        });
        
        form.reset();
    });
}
