window.addEventListener('load', function () {

    var leftArrow = this.document.querySelector('.lf');
    var rightArrow = this.document.querySelector('.lr');

    // 鼠标移动到左右箭头的位置更换图片 有灰色背景的图片
    leftArrow.addEventListener('mouseenter', function () {
        this.style.backgroundPosition = '0 0';
    });

    leftArrow.addEventListener('mouseleave', function () {
        this.style.backgroundPosition = '-83px 0';
    });

    rightArrow.addEventListener('mouseenter', function () {
        this.style.backgroundPosition = '-42px 0';
    });

    rightArrow.addEventListener('mouseleave', function () {
        this.style.backgroundPosition = '-123px 0';
    });

    // 获取图片 和 小点
    var imgs = this.document.querySelectorAll('.img');
    var dots = this.document.querySelector('.dots').querySelectorAll('span');

    // 给图片设置index 属性，好判断当前的图片是哪一张
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].setAttribute('data-index', i);
    }

    // 获取当前图片 和 图片的index（数组下标）
    var current = this.document.querySelector('.current');
    var currentIndex = current.getAttribute('data-index');

    // 左箭头的点击事件，点击了就返回前一张图片 
    // 如果当前图片为第一张那么需要更换到最后一张图片也就是第二张
    leftArrow.addEventListener('click', function () {
        if (currentIndex > 0) {
            imgs[currentIndex].classList.remove('current');
            dots[currentIndex].classList.remove('square');
            imgs[--currentIndex].classList.add('current');
            dots[currentIndex].classList.add('square');
        } else {
            imgs[currentIndex].classList.remove('current');
            dots[currentIndex].classList.remove('square');
            currentIndex = 2;
            imgs[currentIndex].classList.add('current');
            dots[currentIndex].classList.add('square');
        }
    });

    // 点击右箭头下一张图片切换
    // 如果当前为第三张图片，那么切换回第一张图片
    rightArrow.addEventListener('click', changeImage);

    var timer = this.setInterval(changeImage, 3000);

    function changeImage() {
        if (currentIndex < 2) {
            imgs[currentIndex].classList.remove('current');
            dots[currentIndex].classList.remove('square');
            imgs[++currentIndex].classList.add('current');
            dots[currentIndex].classList.add('square');
        } else {
            imgs[currentIndex].classList.remove('current');
            dots[currentIndex].classList.remove('square');
            currentIndex = 0;
            imgs[currentIndex].classList.add('current');
            dots[currentIndex].classList.add('square');
        }
    };

    // 小圆点的点击事件
    for (let k = 0; k < dots.length; k++) {
        dots[k].setAttribute('data-index', k);
        dots[k].addEventListener('click', function () {
            var index = this.getAttribute('data-index');
            if (index != currentIndex) {
                imgs[currentIndex].classList.remove('current');
                dots[currentIndex].classList.remove('square');
                imgs[index].classList.add('current');
                dots[index].classList.add('square');
                currentIndex = index;
            }

        })
    }

});

//1.获取事件源
var tab_list = document.querySelector(".tab_list");
var lis = tab_list.querySelectorAll("li");
var items = document.querySelectorAll(".item");
console.log(items);
for (var i = 0; i < lis.length; i++) {
    //开始给5个小li设置自定义属性
    lis[i].setAttribute("data-index", i);

    lis[i].onclick = function () {
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = "";
            //排除其他
        }
        this.className = "current";

        //2.显示内容模块，下面显示与上面一一对应
        //获取当前的index的属性值
        var index = this.getAttribute("data-index");
        for (var i = 0; i < items.length; i++) {
            items[i].style.display = "none";
        }
        items[index].style.display = 'block';
    }
}
