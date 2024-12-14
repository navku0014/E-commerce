import React from "react";
import AddressCard from "../addressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function OrderDetails(){
    return(
        <div className="lg:5 lg:px-20">
            <div>
                <h1 className="font-bold text-xl py-7">Delivery Address</h1>
            <AddressCard/>
            </div>
            <div className="py-20">
                <OrderTracker activeStep={3}/>
            </div>
            <Grid container className="space-y-5">

                {[1,1,1,1,1].map((item)=><Grid className="shadow-xl rounded-md p-5 border" sx={{alignItems:"center", justifyContent:"space-between"}} item container>
                    <Grid item xs={6}>
                        <div className="flex items-center space-x-5">
                            <img className="w-[5rem] h-[5rem]" src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt=""/>

                            <div className="space-y-2 ml-5">
                                <p className="font-semibold">Men Printed Pure Cotton Straight Kurta</p>
                                <p className="space-x-5 opacity-50 text-xs font-semibold"><span>Color: White</span> <span>Size: M</span></p>
                                <p>Seller: Rajesh</p>
                                <p>Price: $1999</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item>
                        <Box sx={{color:deepPurple[500]}}>
                            <StarBorderIcon sx={{fontSize:"2rem"}}/>
                            <span>Rate & Review Product</span>
                        </Box>
                    </Grid>
                </Grid>)}
            </Grid>
        </div>
    )
}