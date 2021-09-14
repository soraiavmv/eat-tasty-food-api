const db = connect("localhost:27020/eat-tasty-food");

const insert = (title, description, picture, price, category, alergens) => {
    const template = {
        title,
        description,
        picture,
        price,
        category,
        alergens
    }

    db.menu.insert(template);
}

insert("Lapas Grelhadas", "Lapas Grelhadas com molho de pimenta da terra", "https://tinyurl.com/khm4kbxb", 12.5, "entrada", null);
insert("Tortas de Erva Patinha", "Tortas de algas (4 unidades)", "https://tinyurl.com/mfjpu5fe", 3.5, "entrada", ["ovo"]);
insert("Sopa de Peixe", "Sopa de peixe, servida com pão caseiro", "https://tinyurl.com/jjda6vsw", 5.5, "entrada", ["gluten"]);
insert("Alcatra", "Alcatra Regional, acompanhada de massa sovada", "https://tinyurl.com/pt82fxf2", 12.5, "carne", ["gluten", "lactose", "ovo"]);
insert("Prato Regional", "Prato de morcela, linguiça, e torresmos, acompanhada inhame frito", "https://tinyurl.com/y6neb5p9", 10.5, "carne", ["gluten"]);
insert("Bife Regional", "Bife de vaca com molho de pimenta da terra, acompanhado de salada e arroz", "https://tinyurl.com/da6zbynd", 10.5, "carne", ["gluten"]);
insert("Chicharros Fritos", "Chicharros Fritos com molho vilão, acompanhados de batata cozida e salada", "https://tinyurl.com/3bt6av8x", 9.5, "peixe", ["gluten"]);
insert("Bife de Atum", "Bife de Atum Patudo grelhado, acompanhado de migas de batata doce e legumes ao vapor", "https://tinyurl.com/43ef2zvn", 12.5, "peixe", ["gluten"]);
insert("Caldeirada de Congro", "Caldeirada de Congro, servida sobre fatias de pão caseiro torrado", "https://tinyurl.com/26bec3u4", 13.5, "peixe", ["gluten", "ovo"]);
insert("Tarte Dona Amélia", "Tarte Dona Amélia (fatia)", "https://tinyurl.com/y4a3cx7a", 3.5, "sobremesa", ["gluten", "frutos casca rija", "ovo"]);
insert("Gelado de Ananás dos Açores", "Gelado de Ananás dos Açores e Hortelã (taça)", "https://tinyurl.com/99z2dfpy", 2.5, "sobremesa", ["lactose"]);
insert("Pudim de Maracujá", "Pudim de Maracujá (fatia)", "https://tinyurl.com/u8ktk2nv", 2.5, "sobremesa", ["lactose", "ovo"]);