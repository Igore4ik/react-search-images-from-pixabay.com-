
import '../styles/App.css';
import Header from "./Header";
import SearchForm from "./SearchForm";
import {useDispatch, useSelector} from "react-redux";
import {getImagesThunk} from "../redux/thunk/getImagesThunk";
import {setImagesAC} from "../redux/actions/action";
import DisplayImages from "./DisplayImages";




function App() {
    const images = useSelector(state => state.images)
    const dispatch = useDispatch();
    const searchImg = (text) => {
        const promise = getImagesThunk(text);
        Promise.all([promise]).then(values=>{
            dispatch(setImagesAC(values[0].hits))
        })
    }
  return (
    <div className="App">
      <Header/>
      <SearchForm search={searchImg}/>
      <DisplayImages images={images}/>
    </div>
  );
}

export default App;
