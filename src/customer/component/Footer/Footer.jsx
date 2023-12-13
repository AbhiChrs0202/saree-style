import React from "react";
import { Grid, Typography} from '@mui/material';
import { Button } from "@mui/material";
const Footer = () => {
    return (
      <div>
        <Grid
          className="bg-black text-white text-center mt-10"
          container
          sx={{ bgcolor: "black", color: "white", py: 3 }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5" variant="h6">
              {" "}
              Company{" "}
            </Typography>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                {" "}
                About{" "}
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                {" "}
                Blog{" "}
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                {" "}
                Press{" "}
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                {" "}
                Jobs{" "}
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                {" "}
                Partners{" "}
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5" variant="h6">
              {" "}
              Solutions{" "}
            </Typography>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                {" "}
                Marketing{" "}
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                {" "}
                Analytics{" "}
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                {" "}
                Commerce{" "}
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                {" "}
                Insights{" "}
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                {" "}
                Supports{" "}
              </Button>
            </div>
          </Grid>
                    <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5" variant="h6">
              {" "}
              Categories{" "}
            </Typography>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                {" "}
                Sarees{" "}
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                {" "}
                Lehenga{" "}
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                {" "}
                Salwar Kameez{" "}
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                {" "}
                Gowns{" "}
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                {" "}
                Kurtis{" "}
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5" variant="h6">
              {" "}
              Legal{" "}
            </Typography>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                {" "}
                Claim{" "}
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                {" "}
                Privacy{" "}
              </Button>
            </div>
            <div>
              <Button className="pb-5" variant="h6" gutterBottom>
                {" "}
                Terms{" "}
              </Button>
            </div>
          </Grid>
          <Grid className="pt-5  border border-color:white " item xs={12} >
            <Typography variant="body2" component="p" align="center">
                &copy; 2023 SareeStyle. All rights reserved.
            </Typography>
            <Typography variant="body2" component="p" align="center">
                Made By Students.
            </Typography>

          </Grid>
        </Grid>
      </div>
    );
}

export default Footer;