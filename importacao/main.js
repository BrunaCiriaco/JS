const {gets, print} = require('./functionAuxi');


let maior = 0;
for (let i = 0; i < 5; i++) {
    const replica = gets();
    if(replica > maior){
      maior = replica;
    }
}
print(maior)