const os = require('os');

//Utilizando o método nativo SetInterval
setInterval(function() {
    //Utilizando de desestruturação para obter algumas informações do OS em Megabytes
    const {arch, platform, totalmem, freemem } = os;
    const TRam = totalmem() /1024 /1024;
    const TFRam = freemem() /1024 /1024;

//Descobrindo o uso da Memória RAM = %
    const RamConsumida = (TFRam / TRam) * 100;


    //Trazendo informações do OS
    const stats = {
    OS:platform (),
    Arch: arch(),
    TotalRam: (`${parseInt(TRam)} MB`),
    FreeRam: (`${parseInt(TFRam)} MB`),
    RamConsumida:(`${RamConsumida.toFixed(2)} %`),

    }
    console.clear();
    console.table(stats);
    exports.stats = stats;
}, 1000)



