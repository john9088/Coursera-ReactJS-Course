import React, {useState} from 'react'
<<<<<<< HEAD
import SingleDish from './ViewSingleDish'
import DishDetail from './DishdetailComponent'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const Menu = ({dishes,comments}) => {

    let [menu, setMenu] = useState(null);
    let [selectedDish, setSelectedDish] = useState(null);
    let [dishComment, setDishComment] = useState([]);
    
    let menuTemp = null

    // const upDateDish = (dishToUpdate) => {
    //     let dishID = dishToUpdate.id
    //     let tempDishComments = comments.filter(comment => comment.dishId === dishID)
    //     setDishComment(tempDishComments)
    //     setSelectedDish(dishToUpdate)
    // }

    const renderDish = () => {
        
        menuTemp = dishes.map(dish => 
            <SingleDish
                key={dish.id} 
                // onClick = {() => upDateDish(dish)}
                dishDetails={dish} 
                dishToUpdate={false}
            />)
        setMenu(menuTemp)
    }
    
    if(menu == null)
        renderDish()
=======
import {Media} from 'reactstrap'

const Menu = () =>{
    const [dishes, setDishes] = useState(
        [
            {
              id: 0,
              name:'Uthappizza',
              image: 'assets/images/uthappizza.png',
              category: 'mains',
              label:'Hot',
              price:'4.99',
              description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'},
           {
              id: 1,
              name:'Zucchipakoda',
              image: 'assets/images/zucchipakoda.png',
              category: 'appetizer',
              label:'',
              price:'1.99',
              description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'},
           {
              id: 2,
              name:'Vadonut',
              image: 'assets/images/vadonut.png',
              category: 'appetizer',
              label:'New',
              price:'1.99',
              description:'A quintessential ConFusion experience, is it a vada or is it a donut?'},
           {
              id: 3,
              name:'ElaiCheese Cake',
              image: 'assets/images/elaicheesecake.png',
              category: 'dessert',
              label:'',
              price:'2.99',
              description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'}
           ]
    );

    const menu = dishes.map((dish) => {
        return(
            <div key={dish.id} className="col-12 mt-5">
                <Media tag="li">
                    <Media middle left>
                        <Media  object src={dish.image} alt={dish.name}/>
                    </Media>
                    <Media body className="ml-5">
                        <Media heading>{dish.name}</Media>
                        <p>{dish.description}</p>
                    </Media>
                </Media>
            </div>
        )
    });

>>>>>>> 3c62dd2c25aee9508af3a20cdf0c84d5f0c3c735

    return(
        <div className="container">
            <div className="row">
<<<<<<< HEAD
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
                <DishDetail 
                    dish={selectedDish===null?null:selectedDish}
                    dishComment={dishComment}
                />
            </div>
        </div>
    )

=======
                <Media list>
                    {menu}
                </Media>
            </div>
        </div>
    )
>>>>>>> 3c62dd2c25aee9508af3a20cdf0c84d5f0c3c735
}

export default Menu