function menuFactory() {
    var cardapio= [
        espressos = [
            espresso_simples = {
                nome: "ESPRESSO / 30ML",
                descricao : "(FEITO COM O MILÃO CAFÉ ESPECIAL)",
                preco : "R$ 6,00"
            },
            espresso_duplo = {
                nome: "ESPRESSO / 60ML",
                descricao : "(FEITO COM O MILÃO CAFÉ ESPECIAL)",
                preco : "R$ 8,00"
            },
    
            carioca = {
                nome: "CARIOCA",
                descricao : "(ESPRESSO 30ML * 30ML DE ÁGUA)",
                preco : "R$ 6,00"
            },
    
            cappuuccino = {
                nome: "CAPPUCCINO / 120ML",
                descricao : "(CAFÉ ESPRESSO * LEITE AERADO * CREME * CALDA DE CHCOLATE)",
                preco : "R$ 9,00"
            },
    
            naccaiato = {
                nome: "NACCAIAO / 30ML",
                descricao : "(CAFÉ ESPRESSO 30ML * ESPUMA DE LEITE)",
                preco : "R$ 9,00"
            },
    
            latte = {
                nome: "LATTE / 30ML",
                descricao : "(CAFÉ ESPRESSO 30ML * ESPUMA DE LEITE)",
                preco : "R$ 8,00"
            },
    
            nocaccino = {
                nome: "NOCACCINO / 120ML",
                descricao : "(CAFÉ ESPRESSO 30ML * LEITE AERADO * CHOCOLATE EM BARRA * CALMA DE CHOCOLATE)",
                preco : "R$ 12,00"
            },
        ],
    
        coado = [
            coado_prensa = {
                preco: "A PARTIR DE R$12,00"
            },
    
            filtrado = {
                nome: "FILTRADO V60 / 200ML",
                descricao: "(CAFÉ ESPECIAL COADO)"
            },
    
            prensa = {
                nome: "PRENSA FRANCESA / 200ML",
                descricao: "(CAFÉ ESPECIAL EXTRAÍDO NA PRENSA)"
            },
            
            filtrado = {
    
                nome: "FILTRADO V60 / 200ML AROMATIZADO",
                descricao: "(CAFÉ ESPECIAL COADO * LASCAS DE LARANJA DESITRATADA)"
            }
    
        ],
    
        refrescantes = [
            espresso_tonica = {
                nome: "ESPRESSO TÔNICA / 360ML",
                descricao : "(TÔNICA * UMA DOSE DE ESPRESSO * GOTTAS DE LIMÃO SICILIANO * GELO)",
                preco : "R$ 12,00"
            },
    
            pink_limonade = {
                nome: "PINK LIMONADE / 360ML",
                descricao : "(TÔNICA * XAROPE DE ... * SUCO DE LIMÃO SICILIANO * GELO)",
                preco : "R$ 12,00"
            },
    
            soda = {
                nome: "SODA ITALIANA / 360ML",
                descricao : "(TÔNICA * XAROPE * SUCO DE LIMÃO SICILIANO * GELO)",
                preco : "R$ 12,00"
            },
    
            affogatto = {
                nome: "AFFOGATO",
                descricao : "(DELICIOSO SORVETE DE CREME * CAFÉ ESPRESSO 30ML * CALDA DE CHOCOLATE)",
                preco : "R$ 14,00"
            },
    
            espresso_tropical = {
                nome: "ESPRESSO TROPICAL / 250ML",
                descricao : "(UMA DOSE DE ESPRESSO AROMATIZADO COM LARANJA E ADOÇADO COM MEL * GELO)",
                preco : "R$ 17,00"
            },
    
        ],
    
        salgados = [
            pao_de_queijo = {
                nome: "PÃO DE QUEIJO",
                preco: "R$ 6,00"
            },
    
            pao_de_queijo_recheado = {
                nome: "PÃO DE QUEIJO RECHEADO E TOSTADO",
                descricao: "(RECHEADO COM QUEIJO MEIA CURA OOU REQUEIJÃO DE CORTE)",
                preco: "R$ 9,00"
            },
    
            pao_com_mateiga = {
                nome: "PÃO COM MANTEIGA TOSTADO",
                descricao: "(FATIA DE PÃO DE FERMENTAÇÃO LENTA TOSTADO COM MANTEIGA) TEMOS TAMBÉM A OPÇÃO DE GELEIA DE FRUTAS VERMELHAS - R$ 7,00",
                preco: "R$ 7,00"
            },
    
            tostex = {
                nome: "TOSTEX DA CASA",
                descricao: "(PÃO DE FERMENTAÇÃO LENTA COM MANTEIGA * QUEIJO MEIA CURA * TOMATE CEREJA * ORÉGANO REGADO COM AZEITE)",
                preco: "R$ 15,00"
            },
    
            empada = {
                nome: "EMPADA",
                descricao: "(PALMITO, FRANGO E ALHO-PORÔ)",
                preco: "R$ 10,00"
            }
    
        ],
    
        doce = [
            bolo = {
                nome: "BOLO DO DIA (FATIA)",
                preco: "R$ 8,00"
            },
    
            brownie = {
                nome: "BROWNIE DA CASA",
                preco: "R$ 10,00"
            },
    
            divino_brownie = {
                nome: "DIVINO BROWNIE",
                descricao: "(BROWNIE * SORVETE DE CREME * CALDA DE CHOCOLATE * CASTANHAS)",
                preco: "R$ 18,00"
            },
    
            taca_sorvete = {
                nome: "TAÇA DE SORVETE",
                descricao: "(DUAS BOLAS DE SORVETE DE CREME * CALDA DE CHOCOLATE * FAROFA DE AMENDOIM)",
                preco: "R$ 12,00"
            },
    
            sorvete_frutas = {
                nome: "SORVETE COM FRUTAS SILVESTRES",
                descricao: "(DUAS BOLAS DE SORVETE DE CREME * DELICIOSA GELEIA CASEIRA DEE FRUTAS VERMELHAS * FAROFA DE AMENDOIM)",
                preco: "R$ 14,00"
            }
        ],
    
        bedidas = [
            agua = {
                nome: "ÁGUA / ÁGUA COM GÁS",
                preco: "R$ 4,00"
            },
    
            coca = {
                nome: "COCA-COLA",
                preco: "R$ 6,00"
            },
    
            chocolate_quente = {
                nome: "CHOCOLATE QUENTE",
                descricao: "(LEITE AERADO * CHOCOLATE EM PÓ * CALDA DE CHOCOLATE)",
                preco: "R$ 9,00"
            }
        ]
    ]

    return cardapio
}

function createCardapio(cardapio) {
    
    let menuHtmlComponent
    
    for (let index = 0; index < cardapio.length; index++) {
        //Add a card in our menu area
        console.log(cardapio[index])
        for (let item = 0; item < cardapio[item].length; item++) {
            //Add itens in our card
            try {
                console.log(cardapio[index][item].nome)                
            } catch (error) {
                
            }
            try {
                console.log(cardapio[index][item].preco)            
            } catch (error) {
                
            }
            try {
                console.log(cardapio[index][item].descricao)
            } catch (error) {
                
            }
        }
        console.log("")
    }

    return menuHtmlComponent
}

function setCardapioOnScreen(HtmlComponent) {
    //Set HtmlComponent in our html area
    var cardapioSection = document.getElementById("cardapio");


}

setCardapioOnScreen(
    createCardapio(
        menuFactory()
        )
    )