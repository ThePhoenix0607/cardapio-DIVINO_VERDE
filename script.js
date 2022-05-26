var cardapio = parseInt(document.getElementById("cardapio").value);

var cardapio= [
    espressos = [
        espresso_simples = {
            nome: "ESPRESSO / 30ML",
            descrição : "(FEITO COM O MILÃO CAFÉ ESPECIAL)",
            preço : "R$ 6,00"
        },
        espresso_duplo = {
            nome: "ESPRESSO / 60ML",
            descrição : "(FEITO COM O MILÃO CAFÉ ESPECIAL)",
            preço : "R$ 8,00"
        },

        carioca = {
            nome: "CARIOCA",
            descrição : "(ESPRESSO 30ML * 30ML DE ÁGUA)",
            preço : "R$ 6,00"
        },

        cappuuccino = {
            nome: "CAPPUCCINO / 120ML",
            descrição : "(CAFÉ ESPRESSO * LEITE AERADO * CREME * CALDA DE CHCOLATE)",
            preço : "R$ 9,00"
        },

        naccaiato = {
            nome: "NACCAIAO / 30ML",
            descrição : "(CAFÉ ESPRESSO 30ML * ESPUMA DE LEITE)",
            preço : "R$ 9,00"
        },

        latte = {
            nome: "LATTE / 30ML",
            descrição : "(CAFÉ ESPRESSO 30ML * ESPUMA DE LEITE)",
            preço : "R$ 8,00"
        },

        nocaccino = {
            nome: "NOCACCINO / 120ML",
            descrição : "(CAFÉ ESPRESSO 30ML * LEITE AERADO * CHOCOLATE EM BARRA * CALMA DE CHOCOLATE)",
            preço : "R$ 12,00"
        },
    ],

    coado = [
        coado_prensa = {
            preço: "A PARTIR DE R$12,00"
        },

        filtrado = {
            nome: "FILTRADO V60 / 200ML",
            descrição: "(CAFÉ ESPECIAL COADO)"
        },

        prensa = {
            nome: "PRENSA FRANCESA / 200ML",
            descrição: "(CAFÉ ESPECIAL EXTRAÍDO NA PRENSA)"
        },
        
        filtrado = {

            nome: "FILTRADO V60 / 200ML AROMATIZADO",
            descrição: "(CAFÉ ESPECIAL COADO * LASCAS DE LARANJA DESITRATADA)"
        }

    ],

    refrescantes = [
        espresso_tonica = {
            nome: "ESPRESSO TÔNICA / 360ML",
            descrição : "(TÔNICA * UMA DOSE DE ESPRESSO * GOTTAS DE LIMÃO SICILIANO * GELO)",
            preço : "R$ 12,00"
        },

        pink_limonade = {
            nome: "PINK LIMONADE / 360ML",
            descrição : "(TÔNICA * XAROPE DE ... * SUCO DE LIMÃO SICILIANO * GELO)",
            preço : "R$ 12,00"
        },

        soda = {
            nome: "SODA ITALIANA / 360ML",
            descrição : "(TÔNICA * XAROPE * SUCO DE LIMÃO SICILIANO * GELO)",
            preço : "R$ 12,00"
        },

        affogatto = {
            nome: "AFFOGATO",
            descrição : "(DELICIOSO SORVETE DE CREME * CAFÉ ESPRESSO 30ML * CALDA DE CHOCOLATE)",
            preço : "R$ 14,00"
        },

        espresso_tropical = {
            nome: "ESPRESSO TROPICAL / 250ML",
            descrição : "(UMA DOSE DE ESPRESSO AROMATIZADO COM LARANJA E ADOÇADO COM MEL * GELO)",
            preço : "R$ 17,00"
        },

    ],

    salgados = [
        pao_de_queijo = {
            nome: "PÃO DE QUEIJO",
            preço: "R$ 6,00"
        },

        pao_de_queijo_recheado = {
            nome: "PÃO DE QUEIJO RECHEADO E TOSTADO",
            descrição: "(RECHEADO COM QUEIJO MEIA CURA OOU REQUEIJÃO DE CORTE)",
            preço: "R$ 9,00"
        },

        pao_com_mateiga = {
            nome: "PÃO COM MANTEIGA TOSTADO",
            descrição: "(FATIA DE PÃO DE FERMENTAÇÃO LENTA TOSTADO COM MANTEIGA) TEMOS TAMBÉM A OPÇÃO DE GELEIA DE FRUTAS VERMELHAS - R$ 7,00",
            preço: "R$ 7,00"
        },

        tostex = {
            nome: "TOSTEX DA CASA",
            descrição: "(PÃO DE FERMENTAÇÃO LENTA COM MANTEIGA * QUEIJO MEIA CURA * TOMATE CEREJA * ORÉGANO REGADO COM AZEITE)",
            preço: "R$ 15,00"
        },

        empada = {
            nome: "EMPADA",
            descrição: "(PALMITO, FRANGO E ALHO-PORÔ)",
            preço: "R$ 10,00"
        }

    ],

    doce = [
        bolo = {
            nome: "BOLO DO DIA (FATIA)",
            preço: "R$ 8,00"
        },

        brownie = {
            nome: "BROWNIE DA CASA",
            preço: "R$ 10,00"
        },

        divino_brownie = {
            nome: "DIVINO BROWNIE",
            descrição: "(BROWNIE * SORVETE DE CREME * CALDA DE CHOCOLATE * CASTANHAS)",
            preço: "R$ 18,00"
        },

        taca_sorvete = {
            nome: "TAÇA DE SORVETE",
            descrição: "(DUAS BOLAS DE SORVETE DE CREME * CALDA DE CHOCOLATE * FAROFA DE AMENDOIM)",
            preço: "R$ 12,00"
        },

        sorvete_frutas = {
            nome: "SORVETE COM FRUTAS SILVESTRES",
            descrição: "(DUAS BOLAS DE SORVETE DE CREME * DELICIOSA GELEIA CASEIRA DEE FRUTAS VERMELHAS * FAROFA DE AMENDOIM)",
            preço: "R$ 14,00"
        }
    ],

    bedidas = [
        agua = {
            nome: "ÁGUA / ÁGUA COM GÁS",
            preço: "R$ 4,00"
        },

        coca = {
            nome: "COCA-COLA",
            preço: "R$ 6,00"
        },

        chocolate_quente = {
            nome: "CHOCOLATE QUENTE",
            descrição: "(LEITE AERADO * CHOCOLATE EM PÓ * CALDA DE CHOCOLATE)",
            preço: "R$ 9,00"
        }
    ]
]

var cardapioSection = document.getElementById("cardapio");


console.log(cardapio)
