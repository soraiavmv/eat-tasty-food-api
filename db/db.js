const db = connect("localhost:27017/eat-tasty-food");

const removeData = (collection) => {
    db[collection].remove({});
}

const insert = (id, title, description, picture, price, category, alergens) => {
    const template = {
        id,
        title,
        description,
        picture,
        price,
        category,
        alergens
    }

    db.menu.insert(template);
}

removeData('menu');

insert(1, "Lapas Grelhadas", "Lapas Grelhadas com molho de pimenta da terra", "https://amodadoflavio.pt/ophaboah/2018/12/Lapas-grelhadas-para-a-Ceia-de-Natal.png", 12.5, "entrada", null);
insert(2, "Tortas de Erva Patinha", "Tortas de algas (4 unidades)", "https://scontent.fpdl2-1.fna.fbcdn.net/v/t1.6435-9/68285417_2506529009408583_8257517828530241536_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeF2YxsKfMkhxOt3qrNrQPNe79bouo7n4N3v1ui6jufg3V_OEsMvrS1zL0_hzaugFOCG2VW6OaGMfppm_uGtUU4I&_nc_ohc=lCv-IsrZAPoAX-IiOOX&_nc_ht=scontent.fpdl2-1.fna&oh=e62eb54328f95687734ff38a8da2fddf&oe=616C847B", 3.5, "entrada", ["ovo"]);
insert(3, "Sopa de Peixe", "Sopa de peixe, servida com pão caseiro", "https://cozinhaacoriana.pt/wp-content/uploads/2019/01/sopa-de-peixe.jpg", 5.5, "entrada", ["gluten"]);
insert(4, "Alcatra", "Alcatra Regional, acompanhada de massa sovada", "https://2.bp.blogspot.com/-zg-6JRMxQNc/XEehPQE4yWI/AAAAAAAAe6o/p3a0cNxnKoQRB8OVXUsCKASFMUg0bVEYQCLcBGAs/s1600/Alcatra%2BRegional%2B2.jpg", 12.5, "carne", ["gluten", "lactose", "ovo"]);
insert(5, "Prato Regional", "Prato de morcela, linguiça e torresmos, acompanhado de inhame frito", "https://media-cdn.tripadvisor.com/media/photo-s/0f/a1/bb/63/prato-regional.jpg", 10.5, "carne", ["gluten"]);
insert(6, "Bife Regional", "Bife de vaca com molho de pimenta da terra, acompanhado de salada e arroz", "https://www.cultuga.com.br/wp-content/uploads/2017/12/bife-regional-acores-cultuga-saomiguel.jpg", 10.5, "carne", ["gluten"]);
insert(7, "Chicharros Fritos", "Chicharros Fritos com molho vilão, acompanhados de batata cozida e salada", "https://media.rtp.pt/cookoff/wp-content/uploads/sites/23/2015/06/Chicharros-fritos-com-molho-de-vil%C3%A3o-mysweetportugal.com_-750x422-1434640850.jpg", 9.5, "peixe", ["gluten"]);
insert(8, "Bife de Atum", "Bife de Atum Patudo grelhado, acompanhado de migas de batata doce e legumes ao vapor", "https://www.cozinharsemstress.pt/cozinhar/wp-content/uploads/2015/02/IMG_9680.jpg", 12.5, "peixe", ["gluten"]);
insert(9, "Caldeirada de Congro", "Caldeirada de Congro, servida sobre fatias de pão caseiro torrado", "https://i.pinimg.com/originals/80/1f/c1/801fc1c89d38eefc641f32eff0b00055.jpg", 13.5, "peixe", ["gluten", "ovo"]);
insert(10, "Tarte Dona Amélia", "Tarte Dona Amélia (fatia)", "https://1.bp.blogspot.com/-_mhZTMRb67E/WkWTJ3Bb0JI/AAAAAAAACPU/Ad736dw4X-kQZkCkUe9nsQ7zQUfgPwXCACLcBGAs/s1600/Bolo%2BD.%2BAm%25C3%25A9lia%2B2.jpg", 3.5, "sobremesa", ["gluten", "frutos secos", "ovo"]);
insert(11, "Gelado de Ananás dos Açores", "Gelado de Ananás dos Açores e Hortelã (taça)", "https://almadealecrim.pt/wp-content/uploads/2016/10/GeladoAnanazHortela_1.jpg", 2.5, "sobremesa", ["lactose"]);
insert(12, "Pudim de Maracujá", "Pudim de Maracujá (fatia)", "https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-pudim-maracuja-calda.jpg", 2.5, "sobremesa", ["lactose", "ovo"]);