
import TitularConta from "./semana02/TitularConta";
import ContaBancaria from "./semana02/ContaBancaria";
import ContaCorrente from "./semana03/ContaCorrente";
import Banco from "./semana03/Banco";
import leia from 'readline-sync'


var banco = new Banco();


 var opcao = 0;
do{
     console.log("---------------MENU--------------");
     opcao = leia.keyInSelect(["CRIAR CONTA", "MOSTRAR CONTAS", "DELETAR CONTA", "TRANSFERIR"])+1
     switch(opcao){
         case 1: 
             console.log("---------------CRIANDO CONTA--------------");
             banco.adicionarContas();
         break;

         case 2: 
             console.log("----------------MOSTRAR CONTA---------------")
             banco.mostrarConta()
         break;
        
         case 3:
              console.log("---------------DELETANDO A CONTA...........----------");
              banco.deletarContas();
         break;

         case 4:
              console.log("---------------TRANSFERENCIA ENTRE CONTAS...........----------");
              banco.transferenciaContas();
         break;
     }  

}while(opcao != 0);

// banco.adicionarContas()