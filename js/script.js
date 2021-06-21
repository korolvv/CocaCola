document.addEventListener('DOMContentLoaded', function () {

    // Gender

    const select = document.querySelector('.select-selected');
    const items = document.querySelector('.select-items');
    const boyItem = document.querySelector('.select-items-2');
    const girlItem = document.querySelector('.select-items-3');
    const selectText = document.querySelector('.select-selected__text');

    select.addEventListener('click', () => {
        select.classList.add('hide');
        items.classList.remove('hide');
        items.classList.add('show');
    });

    boyItem.addEventListener('click', () => {
        items.classList.remove('show');
        items.classList.add('hide');
        select.classList.remove('hide');
        select.classList.add('show');
        selectText.innerHTML = '';
        selectText.innerHTML = 'Boy';
    });

    girlItem.addEventListener('click', () => {
        items.classList.remove('show');
        items.classList.add('hide');
        select.classList.remove('hide');
        select.classList.add('show');
        selectText.innerHTML = '';
        selectText.innerHTML = 'Girl';
    });

    // Circles


    const circle1 = document.querySelector('.present__circles__1');
    const circle2 = document.querySelector('.present__circles__2');
    const circle3 = document.querySelector('.present__circles__3');
    const circleItem1 = document.querySelector('.present__blocks__item-1');
    const circleItem2 = document.querySelector('.present__blocks__item-2');
    const circleItem3 = document.querySelector('.present__blocks__item-3');

    circle1.addEventListener('click', () => {
        circle1.classList.add('active_circle');
        circle2.classList.remove('active_circle');
        circle3.classList.remove('active_circle');
        circleItem2.classList.add('hide');
        circleItem2.classList.remove('show_flex');
        circleItem3.classList.add('hide');
        circleItem3.classList.remove('show_flex');
        circleItem1.classList.add('show_flex');
        circleItem1.classList.remove('hide');
    });
    circle2.addEventListener('click', () => {
        circle1.classList.remove('active_circle');
        circle2.classList.add('active_circle');
        circle3.classList.remove('active_circle');
        circleItem3.classList.add('hide');
        circleItem3.classList.remove('show_flex');
        circleItem1.classList.add('hide');
        circleItem1.classList.remove('show_flex');
        circleItem2.classList.remove('hide');
        circleItem2.classList.add('show_flex');
    });

    circle3.addEventListener('click', () => {
        circle1.classList.remove('active_circle');
        circle2.classList.remove('active_circle');
        circle3.classList.add('active_circle');
        circleItem2.classList.add('hide');
        circleItem2.classList.remove('show_flex');
        circleItem1.classList.add('hide');
        circleItem1.classList.remove('show_flex');
        circleItem3.classList.add('show_flex');
        circleItem3.classList.remove('hide');
    });


    // Cloud

    const cloud = document.querySelector('.promo__cloud');

    function showCloud() {
        cloud.style.display = 'flex';
    }




    window.addEventListener('resize', (e) => {
        if (e.target.innerWidth < 1024) {
            cloud.style.display = 'none';
        } else {
            setTimeout(showCloud, 3000);
        }
    });


    // Hamburger

    const hamburger = document.querySelectorAll('.hamburger');
    const hamburgerMenu = document.querySelectorAll('.hamburger__menu');
    const span1 = document.querySelectorAll('#menu__span-1');
    const span2 = document.querySelectorAll('#menu__span-2');
    const span3 = document.querySelectorAll('#menu__span-3');
    const promoHeader = document.querySelectorAll('.promo__header__menu');
    hamburger.forEach(item => {
        item.addEventListener('click', () => {
            span1.forEach(item => {
                item.classList.toggle('menu__span_1');
            });
            span2.forEach(item => {
                item.classList.toggle('menu__span_2');
            });
            span3.forEach(item => {
                item.classList.toggle('menu__span_3');
            });
            hamburger.forEach(item => {
                item.classList.toggle('hamburger_active');
            });
            hamburgerMenu.forEach(item => {
                item.classList.toggle('show_flex');
            });
            promoHeader.forEach(item => {
                item.classList.toggle('hide');
            });

        });
    });




    // Parallax
    // const snowflake = document.querySelector('.promo__snowflake');
    // const pageY = window.pageYOffset;
    // window.addEventListener('scroll', function () {
    //     // if (Math.round(window.pageYOffset) == 1000) {
    //     //     // snowflake.style.top = '100px';
    //     //     // snowflake.style.bottom = '0';
    //     //     snowflake.style.display = 'block';
    //     // }
    //     console.log(pageY);
    // });

    // Menu_Hover

    // const itemContainer = document.querySelectorAll('.promo__header__menu__item');
    // const itemA = document.querySelectorAll('.item_a');
    // const itemHover = document.querySelectorAll('.item_hover');
    // const headerMenu = document.querySelector('.promo__header__menu');

    // itemHover.forEach(item => {
    //     item.classList.add("hide");
    // });

    // itemContainer.forEach(item => {
    //     item.addEventListener('mouseover', () => {
    //         itemHover.forEach(item => {
    //             item.classList.remove("hide");
    //             item.style.paddingTop = '21px';
    //         });
    //         headerMenu.style.alignItems = 'flex-start';
    //         itemA.forEach(item => {
    //             item.classList.add('hide');
    //         });
    //     });
    // });

    // itemContainer.forEach(item => {
    //     item.addEventListener('mouseout', () => {
    //         itemHover.forEach(item => {
    //             item.classList.add("hide");
    //         });
    //         headerMenu.style.alignItems = 'center';
    //         itemA.forEach(item => {
    //             item.classList.remove('hide');
    //         });
    //     });
    // });

});

new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    animateAnchor: false,
    paddingTop: '0px',
    paddingBottom: '0px',
});