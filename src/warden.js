import React from 'react'

export default function Warden() {
  function show4(){
    document.getElementById('w1').style.display="none";
    document.getElementById('w2').style.display="block";
    document.getElementById('w3').style.display="none";
    document.getElementById('d4').style.backgroundColor="grey";
    document.getElementById('d5').style.backgroundColor="black";
    document.getElementById('d6').style.backgroundColor="dimgray";

}
function show5(){
    document.getElementById('w1').style.display="none";
    document.getElementById('w2').style.display="none";
    document.getElementById('w3').style.display="block";
    document.getElementById('d7').style.backgroundColor="dimgray";
    document.getElementById('d8').style.backgroundColor="grey";
    document.getElementById('d9').style.backgroundColor="black";
    
   
}
function show6(){
    document.getElementById('w1').style.display="block";
    document.getElementById('w2').style.display="none";
    document.getElementById('w3').style.display="none";
    document.getElementById('d1').style.backgroundColor="black";
    document.getElementById('d2').style.backgroundColor="dimgray";
    document.getElementById('d3').style.backgroundColor="grey";

}
function show1(){
    document.getElementById('w1').style.display="none";
    document.getElementById('w2').style.display="none";
    document.getElementById('w3').style.display="block";
}
function show2(){
    document.getElementById('w1').style.display="block";
    document.getElementById('w2').style.display="none";
    document.getElementById('w3').style.display="none";
}
function show3(){
    document.getElementById('w1').style.display="none";
    document.getElementById('w2').style.display="block";
    document.getElementById('w3').style.display="none";
}
  
  return (
  <div className='info2'>
    <div className="warden1" id="w1">
          <h1>Warden</h1>
          <hr />
          <div className="img">
            <div id="arrow">
              <img
                width="50px"
                src="https://cdn2.iconfinder.com/data/icons/iconika-productivity-kit-vol-2/512/Move_left-512.png"
                alt=""
                onclick={show1()}
              />
            </div>
            <div>
            <div className="prof">
              <img
                src="Dibakar_Dhara 1.png"
                alt=""
              />
            </div>
            
          </div>
            <div id="arrow">
              <img
                width="50px"
                src="https://cdn1.iconfinder.com/data/icons/desktop-app-icons/56/Right_Side-512.png"
                alt=""
                onclick={show4()}
              />
            </div>
          </div>

          <h2>Prof. Dibakar Dhara</h2>
          <a href="#">Department of Chemistry</a>
          <div>
            <div className="txt">
              <img
                id="ig1"
                width="30px"
                height="30px"
                src="https://cdn.iconscout.com/icon/free/png-512/at-the-rate-2653656-2202652.png"
                alt="logo"
              />
              <p>dibakar@chem.iitkgp.ac.in</p>
            </div>
            <div className="txt">
              <img
                id="ig2"
                width="20px"
                height="30px"
                src="https://cdn.onlinewebfonts.com/svg/img_489302.png"
                alt=""
              />
              <p>+91 3222 282326</p>
            </div>
          </div>
          <hr />
          <div className="dot">
            <span className="dot1" id="d1"></span>
            <span className="dot2" id="d2"></span>
            <span className="dot3" id="d3"></span>
          </div>
        </div>
        <div className="warden2" id="w2">
          <h1>Assistant Warden</h1>
          <hr />
          <div className="img">
            <div id="arrow">
              <img
                width="50px"
                src="https://cdn2.iconfinder.com/data/icons/iconika-productivity-kit-vol-2/512/Move_left-512.png"
                alt=""
                onclick={show2()}
              />
            </div>
            <div className="prof">
              <img
                src="kdebnath 1.png"
                alt=""
              />
            </div>
            <div id="arrow">
              <img
                width="50px"
                src="https://cdn1.iconfinder.com/data/icons/desktop-app-icons/56/Right_Side-512.png"
                alt=""
                onclick={show5()}
              />
            </div>
          </div>
          <h2>Prof. Kapil Debnath</h2>
          <a href="#">Department of Electronics <br/> Electrical Communication Engg.</a>
          <div>
            <div className="txt">
              <img
                id="ig1"
                width="30px"
                height="30px"
                src="https://cdn.iconscout.com/icon/free/png-512/at-the-rate-2653656-2202652.png"
                alt="logo"
              />
              <p>k.debnath@ece.iitkgp.ac.in</p>
            </div>
            <div className="txt">
              <img
                id="ig2"
                width="20px"
                height="30px"
                src="https://cdn.onlinewebfonts.com/svg/img_489302.png"
                alt=""
              />
              <p>+91 3222 283528</p>
            </div>
          </div>
          <hr />
          <div className="dot">
            <span className="dot1" id="d4"></span>
            <span className="dot2" id="d5"></span>
            <span className="dot3" id="d6"></span>
          </div>
        </div>
        <div className="warden3" id="w3">
          <h1>Assistant Warden</h1>
          <hr />
          <div className="img">
            <div id="arrow">
              <img
                width="50px"
                src="https://cdn2.iconfinder.com/data/icons/iconika-productivity-kit-vol-2/512/Move_left-512.png"
                alt=""
                onclick={show3()}
              />
            </div>
            <div className="prof">
              <img
                src="shivakiranbhaktha 1.png"
                alt=""
              />
            </div>
            <div id="arrow">
              <img
                width="50px"
                src="https://cdn1.iconfinder.com/data/icons/desktop-app-icons/56/Right_Side-512.png"
                alt=""
                onclick={show6()}
              />
            </div>
          </div>

          <h2>Prof. Shivakiran <br/>B N Bhaktha</h2>
          <a href="#">Department of Physics</a>
          <div>
            <div className="txt">
              <img
                id="ig1"
                width="30px"
                height="30px"
                src="https://cdn.iconscout.com/icon/free/png-512/at-the-rate-2653656-2202652.png"
                alt="logo"
              />
              <p>kiranbhaktha@phy.iitkgp.ac.in</p>
            </div>
            <div className="txt">
              <img
                id="ig2"
                width="20px"
                height="30px"
                src="https://cdn.onlinewebfonts.com/svg/img_489302.png"
                alt=""
              />
              <p>+91 3222 283802</p>
            </div>
          </div>
          <hr />
          <div className="dot">
            <span className="dot1" id="d7"></span>
            <span className="dot2" id="d8"></span>
            <span className="dot3" id="d9"></span>
          </div>
        </div>
        <div className="contact">
          <h1>Contact</h1>
          <b>Office Phone</b>
          <div className="txt">
            <img
              id="ig2"
              width="20px"
              height="30px"
              src="https://cdn.onlinewebfonts.com/svg/img_489302.png"
              alt=""
            />
            <p>+91 3222 2 81142</p>
          </div>
          <b>Mess Phone</b>
          <div className="txt">
            <img
              id="ig2"
              width="20px"
              height="30px"
              src="https://cdn.onlinewebfonts.com/svg/img_489302.png"
              alt=""
            />
            <p>+91 3222 2 81142</p>
          </div>
          <b>Security Office Phone</b>
          <div className="txt">
            <img
              id="ig2"
              width="20px"
              height="30px"
              src="https://cdn.onlinewebfonts.com/svg/img_489302.png"
              alt=""
            />
            <p>+91 3222 2 81142</p>
          </div>
          <div className="txt">
            <img
              id="ig3"
              width="30px"
              height="30px"
              src="https://cdn.iconscout.com/icon/free/png-512/at-the-rate-2653656-2202652.png"
              alt="logo"
            />
            <b>nehruhall@iitkgp.ac.in</b>
          </div>
  </div>
  </div>
  )
  };





