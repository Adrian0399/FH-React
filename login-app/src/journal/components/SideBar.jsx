import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Toolbar, Drawer, Typography, ListItemButton, ListItem, List, ListItemIcon, Grid, ListItemText } from "@mui/material"



export const SideBar = ({ drawerWidth }) => {
  return (
    <Box
        component='nav'
        sx={{ width: {sm: drawerWidth }, flexShrink: { sm: 0 }}}

    >
        <Drawer
            variant='permanent' //Temporal
            open
            sx={{
                display: { sx: 'block'},
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth}
            }}
        >
        
            <Toolbar>
                <Typography variant='h6' noWrap component=''>
                    Adrian Olvera
                </Typography>
            </Toolbar>
            <Divider/>

            <List>
                {
                    ['Opcion 1', 'Opcion 2', 'Opcion 3', 'Opcion 4', 'Opcion 5'].map( text => (
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ text }/>
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }

            </List>
        
        
        </Drawer>

    </Box>


  )
}
