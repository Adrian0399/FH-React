
import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"


export const JournalPage = () => {
  return (
    
    <JournalLayout>
    {/*
      <Typography>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam perspiciatis maxime minus cumque dolor delectus cum quidem ipsam exercitationem voluptatibus! Dolorum pariatur quod minima debitis quas illo saepe minus rem!</Typography>
    */}

    <NothingSelectedView/>

    {/*<NoteView />*/}

    <IconButton
      sixe='large'
      sx={{
        color: 'white',
        backgroundColor: 'error.main',
        ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
        position: 'fixed',
        right: 50,
        bottom: 50
      }}
    >
      <AddOutlined sx={{ fontSize: 30}} />
    </IconButton>

    </JournalLayout>

  )
}
