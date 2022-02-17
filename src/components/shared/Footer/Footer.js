import './Footer.css'
import {Link} from "react-router-dom";

function Footer(props) {
  return (
      <div className="w-full flex flex-row flex-wrap justify-between align-center items-center p-20 light-text footer-border">
        <div className="flex flex-row flex-wrap mb-8">
          <div className="w-40 h-40 mr-8">
            <svg width="" height="160" viewBox="0 0 750 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M166.446 1.09256C165.579 1.97796 164.867 16.7167 164.867 33.8501V64.9979H127.006H89.1441V45.4888V25.9819L53.0035 24.3209C33.1251 23.4075 13.2489 22.4637 8.83174 22.2207L0.800506 21.7792L0.0845778 75.5106C-0.553332 123.241 2.52836 197.331 5.58712 207.872C6.95243 212.575 10.0892 213.899 24.4376 215.838L35.5115 217.334L38.3775 195.481C39.9562 183.462 42.5124 167.321 44.0636 159.612L46.8814 145.595L188.481 144.992L330.081 144.392V294.667V444.942L352.745 460.55C365.212 469.136 376.444 476.16 377.706 476.16C378.968 476.16 381.336 474.523 382.968 472.521C384.602 470.519 393.505 463.555 402.755 457.044L419.572 445.206V294.798V144.392L561.165 144.992L702.758 145.595L705.782 156.108C707.446 161.89 710.119 177.659 711.721 191.15L714.633 215.68L722.749 215.448C738.933 214.988 742.597 212.918 744.057 203.422C747.581 180.49 750 129.137 750 77.2394V20.0738L736.806 21.8749C729.548 22.8678 709.672 24.3022 692.634 25.0661L661.656 26.4515L660.991 45.7247L660.323 64.9979H622.62H584.915L584.277 32.8759L583.639 0.753814H540.041H496.442L495.805 32.8759L495.167 64.9979H457.369H419.572V42.7531V20.5106L375.4 21.1437L331.228 21.7792L330.568 43.3886L329.909 64.9979H292.199H254.487L253.849 32.8759L253.211 0.753814L210.618 0.120718C187.192 -0.229705 167.313 0.209492 166.446 1.09256ZM11.7804 479.027C12.7969 722.458 12.5468 717.798 26.567 754.492C42.3381 795.764 69.2565 826.391 118.974 859.632C182.196 901.9 223.24 926.79 225.659 924.327C226.423 923.552 227.995 892.042 229.158 854.308C230.319 816.575 232.35 778.867 233.672 770.515C239.851 731.467 267.304 694.873 313.748 663.781L340.191 646.08L333.415 640.452C309.54 620.623 267.963 596.636 261.233 598.811C253.92 601.175 224.771 625.637 210.927 641.029C183.66 671.346 166.838 705.671 157.013 751.043C154.124 764.381 151.092 775.973 150.278 776.802C145.512 781.654 120.711 755.405 106.815 730.801C95.14 710.126 95.3144 713.551 93.9078 478.497L92.586 257.73L51.7208 257.093L10.8533 256.452L11.7804 479.027ZM155.689 308.785C155.689 366.023 158.194 387.534 168.532 419.03C177.281 445.692 185.636 461.443 202.059 482.248C241.962 532.798 298.422 579.734 381.281 631.243C464.861 683.202 483.145 698.134 497.441 726.107C510.511 751.688 513.535 768.354 513.76 816.07C513.978 862.604 516.805 921.681 518.914 923.83C521.351 926.308 533.111 920.295 565.394 900.059C617.877 867.162 660.727 835.895 678.866 817.262C704.977 790.438 728.157 746.495 733.781 713.149C737.63 690.341 741.046 518.76 740.337 383.882L739.674 257.73H698.371H657.067V463.312C657.067 618.189 656.356 672.925 654.183 685.246C650.259 707.479 631.828 745.278 616.684 762.147C599.043 781.799 592.631 779.453 589.258 752.106C585.908 724.949 572.133 689.813 554.469 663.379C538.593 639.616 503.115 609.816 455.139 579.942C445.043 573.655 425.94 560.528 412.688 550.772C399.437 541.014 367.447 518.396 341.6 500.508C286.114 462.106 267.357 445.12 256.006 422.994C245.186 401.904 238.296 378.126 238.296 361.89C238.296 341.332 240.37 339.715 268.514 338.328L292.22 337.159V297.445V257.73L223.954 257.111L155.689 256.492V308.785ZM458.581 297.445V338.328H474.494C483.246 338.328 493.166 339.395 496.539 340.701L502.672 343.075L501.849 369.503C501.043 395.278 500.775 396.442 490.99 416.546C482.682 433.619 477.158 441.032 458.87 459.665C446.72 472.039 430.339 486.334 422.461 491.427C414.586 496.522 408.457 501.68 408.842 502.893C409.606 505.304 474.237 553.253 476.722 553.253C479.923 553.253 517.097 517.891 532.812 499.893C552.299 477.583 573.329 438.658 580.626 411.4C584.917 395.365 585.61 385.188 586.514 324.895L587.54 256.562H523.06H458.581V297.445ZM366.577 673.834C364.877 675.918 355.972 682.786 346.784 689.098L330.081 700.573V838.385V976.199L340.487 982.918C346.21 986.614 356.536 991.968 363.434 994.818L375.974 1000L388.647 994.762C395.618 991.884 405.437 986.492 410.465 982.783L419.609 976.04L419.017 838.885L418.425 701.73L402.362 691.025C370.506 669.794 370.049 669.575 366.577 673.834Z" fill="#edbe44"/>
            </svg>
          </div>
          <div>
            <h3 className="yellow-text text-xl mb-6">The Wizard's Tower</h3>
            <p>An <i>Enchanted Forest</i> Project</p>
            <p>Powered by Velas</p>
          </div>
        </div>
        <div>
          <h3 className="yellow-text text-xl mb-6">Links</h3>
          <Link to={''} className="block">About</Link>
          <Link to={''} className="block">Impressum</Link>
          <Link to={''} className="block">Github</Link>
          <Link to={''} className="block">Docs</Link>
        </div>
        <div>
          <h3 className="yellow-text text-xl mb-6">Socials</h3>
          <Link to={''} className="block">Discord</Link>
          <Link to={''} className="block">Medium</Link>
          <Link to={''} className="block">Twitter</Link>
          <Link to={''} className="block">Telegram</Link>
        </div>
      </div>
  )
}

export default Footer