import { Button } from "@headlessui/react";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-alice-carousel";

const Footer = () => {
    return (
        <div>
            <Grid className="bg-black text-white text-center mt-10"
                container
                style={{ backgroundColor: 'black', color: 'white', py: 3 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <br/>
                    <Typography className="pb-5" variant="h6">Company</Typography>
                    <div>
                        <Button className="pb-5" variant="h6">About</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">Blog</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">Press</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">Jobs</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">Partners</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <br/>
                    <Typography className="pb-5" variant="h6">Solutions</Typography>
                    <div>
                        <Button className="pb-5" variant="h6">Marketing</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">Analytics</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">Commerce</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">Insights</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">Support</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">Partners</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <br/>
                    <Typography className="pb-5" variant="h6">Documentation</Typography>
                    <div>
                        <Button className="pb-5" variant="h6">Guides</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">API Status</Button>
                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <br/>
                    <Typography className="pb-5" variant="h6">Legal</Typography>
                    <div>
                        <Button className="pb-5" variant="h6">Claim</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">Privacy</Button>
                    </div>
                    <div>
                        <Button className="pb-5" variant="h6">Terms</Button>
                    </div>
                </Grid>

                <Grid className="pt-20" item xs={12}>
                    <Typography variant="body2" component="p" align="center">
                        &copy; 2024 Naveen Kumar. All rights reserved.
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Made By Naveen Kumar and His Dedication to Learn.
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                       Icons made By{' '}
                       <Link href="https://freepik.com" color="inherit" underline="always">
                            Freepik
                       </Link>{' '}
                       from{' '}
                       <Link href="https://flaticon.com/" color="inherit" underline="always">
                        www.flaticon.com
                       </Link>
                    </Typography>
                    <br/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer; 