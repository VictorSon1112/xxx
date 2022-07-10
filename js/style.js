const renderChart = () => {
  let section = document.querySelector("#tokenomics");

  let html = `
    <div class="tokenomics container">
        <div class="tokenomics__head">
            <h2>Tokenomics</h2>
            <h4>${infoToken.des}</h4>
            <p>${infoToken.content}</p>
        </div>
        <div class="tokenomics__body">
        <div class="row">
            <div class="col-md-9 col-12">
                <div class="left">
                    <ul class="tokenomics__list">
                    ${tokenomis
                      .map(
                        (vl, i) =>
                          `
                        <div>
                        <svg height="20" width="20">
                            <circle cx="10" cy="10" r="10" stroke-width="3" fill="${
                              vl.color
                            }" />
                        </svg> 
                            <li>
                            <span>${vl.title}</span>
                            <span>${vl.percent}</span>
                            </li>
                            ${
                              vl.block !== ""
                                ? ` <span><img src="img/lock.png" alt=""></span>
                            <span>${vl.block}</span>`
                                : ""
                            }
                        
                        </div>
                        `
                      )
                      .join("")}
                    </ul>
                    <div class="infotknm">
                    <div class="topif">
                        <p>Name: <span>${infoToken.name}</span></p>
                        <p>Symbol: <span>${infoToken.symbol}</span></p>
                        <p>Total Supply: <span>${
                          infoToken.totalSupply
                        }</span></p>
                        <p>Decimal: <span>${infoToken.decimal}</span></p>
                    </div>
                    <div class="topif">
                        <p>Contract: <span class="contract">${
                          infoToken.contract
                        }</span></p>
                    </div>
                </div>
            </div>
          </div>
            <div class="col-md-3 col-12">
                <div class="right">
                    <div class="circleToken">
                        <div id="chart"></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  `;

  section.innerHTML = html;

  let series = tokenomis.map((vl) => Number(vl.percent.replace("%", "")));

  let chartOptions = tokenomis.map((vl) => vl.percent);

  let colorOption = tokenomis.map((vl) => vl.color);

  var options = {
    series: series,
    labels: chartOptions,
    chart: {
      type: "donut",
      sparkline: {
        enabled: true,
      },
    },
    colors: colorOption,
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
    },
    stroke: {
      enabled: true,
      colors: ["#0E0E0E"],
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: false,
              show: false,
              label: "",
            },
          },
        },
      },
    },
  };
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
};

const renderHeader = () => {
  html = `
    <div class="header">
        <div class="hambuger" onclick="showMenuMb()"><img src="img/hamburger.4928710e.png" alt=""></div>
        <div class="logo"><a href="#"><img alt="" src="../img/logo.2db64683.png"></a></div>
        <nav class="header__nav header__navmb animate">
            <ul class="mobileShow">
            ${menu
              .map((vl) => `<li><a href="#${vl.link}">${vl.title}</a></li>`)
              .join("")}
            </ul>
        </nav>
      
       
    </div>
  `;
  let header = document.querySelector("#header");
  header.innerHTML = html;
};

const renderMechas = () => {
  html = `
    ${listMechasSlider
      .map(
        (vl) => `
    <div class="mechasName row ${vl.selected ? "selected" : ""}">
        <div class="col-md-7 col-12">
          <div class="content-mecha_image">
            <img alt="" src="${vl.image}">
          </div>
        </div>
        <div class="col-md-5 col-12">
          <div class="content-mecha_info">
              <div class="content-mecha_info--row">
                  <div class="name">${vl.name}</div>
              </div>
              <p>${vl.content}</p>
          </div>
        </div>
    </div>
    `
      )
      .join("")}  
    <div class="content-mecha_slider">
    ${listMechasSlider
      .map(
        (vl) => `
    <div class="content-mecha_slider--item  ${vl.selected ? "selected" : ""}">
        <img alt="" src="${vl.thumb}">
    </div>
    `
      )
      .join("")}
    </div>
    `;

  let content = document.querySelector(".content-mecha");
  content.innerHTML = html;
};

renderChart();
renderHeader();
renderMechas();

const pauseVid = () => {
  let video = document.querySelector(".videoBanner");
  video.play();
};

function showMenuMb() {
  let menuMB = document.querySelector(".header__navmb");
  if (menuMB.style.display == "none") {
    menuMB.style.display = "block";
  } else {
    menuMB.style.display = "none";
  }
}

const handleShowMoon = () => {
  let moon = document.querySelector(".exploration-moon");
  let mask = document.querySelector(".exploration-mask");

  if (moon.style.display === "none") {
    mask.style.display = "none";
    moon.style.display = "block";
  } else {
    mask.style.display = "block";
    moon.style.display = "none";
  }
};

let selected = document.querySelector(".selected");
let dataId = selected.getAttribute("data-id");
let contentDataId = document.querySelector(`.${dataId}`);
contentDataId.style.display = "flex";

let tab1 = document.querySelectorAll(".choose-tab");
for (let i = 0; i < tab1.length; i++) {
  tab1[i].addEventListener("click", () => {
    let selected = document.querySelector(".selected");
    selected.classList.remove("selected");
    let dataIdPrev = selected.getAttribute("data-id");
    let contentDataIdPrev = document.querySelector(`.${dataIdPrev}`);
    contentDataIdPrev.style.display = "none";
    tab1[i].classList.add("selected");
    let dataIdNext = tab1[i].getAttribute("data-id");
    let contentDataIdNext = document.querySelector(`.${dataIdNext}`);
    contentDataIdNext.style.display = "flex";
  });
}

let listMechaSlide = document.querySelectorAll(".content-mecha_slider--item");
let listMechaBig = document.querySelectorAll(".mechasName");
for (let i = 0; i < listMechaSlide.length; i++) {
  listMechaSlide[i].addEventListener("click", () => {
    let mechasSelect = document.querySelector(
      ".content-mecha_slider--item.selected"
    );
    let mechasBig = document.querySelector(".mechasName.selected");
    mechasSelect.classList.remove("selected");
    mechasBig.classList.remove("selected");
    listMechaSlide[i].classList.add("selected");
    listMechaBig[i].classList.add("selected");
  });
}

const showMechDetail = () => {
  let row = document.querySelector(".row.showRow");
  let col = document.querySelector(".col.showCol");
  col.style.display = "none";
  row.style.display = "flex";
};

const showAnchorTwo = () => {
  let two = document.querySelectorAll(".ar.anchor");
  two[0].style.display = "none";
  two[1].style.display = "block";
};

document.addEventListener("scroll", () => {
  let header = document.querySelector(".header");
  header.style.opacity = "0";
});

function createScrollStopListener(element, callback, timeout) {
  var handle = null;
  var onScroll = function () {
    if (handle) {
      clearTimeout(handle);
    }
    handle = setTimeout(callback, timeout || 200); // default 200 ms
  };
  element.addEventListener("scroll", onScroll);
  return function () {
    element.removeEventListener("scroll", onScroll);
  };
}

// Example usage:

createScrollStopListener(window, function () {
  let header = document.querySelector(".header");
  header.style.opacity = "1";
});
