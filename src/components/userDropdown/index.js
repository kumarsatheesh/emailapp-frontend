import "./style.css";
import { PopupMenu } from "react-simple-widgets";
import config from '../../lib/config'
import { useNavigate } from "react-router-dom"
export default function App(Props) {
  const navigate = useNavigate();
  return (
    <PopupMenu>
      <button className="profile">
        <img src={config.API + "/images/user/" + localStorage.profile} />
      </button>
      <div className="card text-start">
        <div className="card-body px-4 py-4">
          <div id="circle-avatar" className="text-center mx-auto mb-4">
            <span className="profile"> <img src={config.API + "/images/user/" + localStorage.profile} /></span>
          </div>

          <h5 className="text-center mb-0">{localStorage.name}</h5>
          <p className="text-center mb-2">{localStorage.email}</p>




          <hr className="mb-0" style={{ margin: "0 -24px 0" }} />

          <ul>
            {Props.userlist && Props.userlist.map(e => (<li key={e._id} onClick={() => Props.onUserClick(e._id)}>
              <img src={config.API + "/images/user/" + e.profileImage} />
              <a >{e.name}</a>
              <span style={{display:"block",fontSize:"11px"}}>{e email}</span>
            </li>))
            }
          </ul>

          <hr style={{ margin: "0 -24px 24px" }} />

          <div className="d-grid">
            <button onClick={() => navigate("/register")} className="btn btn-secondary">
              <small>Add User</small>
            </button>
          </div>
        </div>
      </div>
    </PopupMenu>
  );
}
