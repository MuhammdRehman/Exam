import React from 'react'
import Card from './card';
import Navbar from './Header';
const properties = [
    {
        image: "https://images.unsplash.com/photo-1560185008-b033106afc26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJlYWNoJTIwaG91c2V8ZW58MHx8fHwxNjk3ODQ0MjA0&ixlib=rb-1.2.1&q=80&w=400",
        title: "Beach Video",
        description: "Located just minutes from the beach.",
        rating: "4.8"
    },
    {
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG1vZGVybiUyMGNhYmlufGVufDB8fHx8MTY5Nzg0NDIxMA&ixlib=rb-1.2.1&q=80&w=400",
        title: "Mountain Video",
        description: "Perfect for a peaceful retreat in the mountains.",
        rating: "4.7"
    }

];

const Home = () => {
    return (
        <div>
            <Navbar/>
            <div style={{ display: 'flex', gap: '20px', flexWrap : 'wrap', justifyContent: 'center', margin: '20px' }}>
           { properties.map((property,index) => (
                <Card key={index}
                    image={property.image}
                    title={property.title}
                    description={property.description}
                    rating={property.rating}
                />
                ))};
            </div>

        </div>



    );
}

export default Home;