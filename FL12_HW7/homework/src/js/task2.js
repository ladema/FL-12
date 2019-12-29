let conf = confirm('Do you want to play a game?');
let prize_3 = 25;
let prize_2 = 50;
let prize_1 = 100;
let prize = [0, prize_3,prize_2,prize_1];
let _prize = 0;
let min_pocket = 0;
let max_pocket = 8;
let max_pocket_inc=4;
let prize_inc = 2;
let userpocket;
if(conf===false){
    alert('You did not become a billionare, but can');
} else {
    let pocket = Math.floor(Math.random() * (max_pocket - min_pocket + 1)) + min_pocket;
    console.log(pocket);
    let attempts = 3;
    for (let i=3;i>=0;i--){
        if (i===0){
            alert('Thank you for your participation. Your prize is: 0$');
            let again = confirm('Do You want to play again?');
            if (again===true){
                continue;
            }else{
                break;
            }
        } let userpocket = parseInt( prompt(`Choose a roulette pocket number from 0 to ${max_pocket}
        \nAttempts left: ${attempts}\nTotal prize: ${_prize}$
        \nPossible prize on current attempt: ${prize[i]}$`, '0') );
                if (userpocket===pocket){
                    _prize +=prize[i];
                    let cont = confirm(`Congratulations, you won! Your orize is: ${prize[i]}$ 
                    \nDo you want to continue?`);
                    if (cont===false){
                        alert(`Thank you for your participation.Your orize is: ${_prize}$`)
                        let again = confirm('Do you want to play again?');
                        if (again===true){
                            continue;
                        }else{
                            break;
                        }
                    }else {
                        max_pocket +=max_pocket_inc; 
                        for (let i=1;i<max_pocket_inc;i++){
                            prize[i] *= prize_inc;
                        }
                    }   
                        let pocket = Math.floor(Math.random() * (max_pocket - min_pocket + 1)) + min_pocket;
                        console.log(pocket);
                        continue;
                }attempts--;   
    } userpocket++;
}