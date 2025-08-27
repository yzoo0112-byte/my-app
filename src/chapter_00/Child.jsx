
import GrandChild from "./GrandChild";
import useStore from "./store";

function Child (){
    const {theme, toggleTheme} = useStore();
    
    return(
        <div style={{
            border: "1px solid gray",
            margin: "1rem",
            padding: "1rem",
            backgroundColor: theme ==="light" ? "#f0f0f0" : "#222",
            color: theme ==="light" ? "black" : "white",
            
        }}>
            <p>Child 컴포넌트에서도 테마 상태 사용 중</p>
            <button onClick={toggleTheme}>테마 전환 (Parent)</button>
            <GrandChild />
        </div>
    );

}
export default Child;