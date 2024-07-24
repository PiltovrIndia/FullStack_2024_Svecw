import CardUI from "./Card";

function CardListUI(){
    const name = "ReactJS";
    const college = "SVECW";
    const userObject = {name:"Name123",branch:"branchName",year:"4"};
    const usersList = ["Name 1","Name 2", "Name 3", "Name 4", "Name 5", "Name 6" ];
    return (
        <div style={{display:'flex',flexWrap:'wrap'}}>
            {
                usersList.map(
                    (userListItem,index) => (<CardUI key={index} 
                        program={name} 
                        col={college} 
                        user={userObject} 
                        userFromArray={userListItem} />)
                    )
            }
            
            
        </div>
    );

}
export default CardListUI;