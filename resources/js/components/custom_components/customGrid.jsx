import React from 'react';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';

export const Grid = styled(MuiGrid)(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& [role="separator"]': {
        margin: theme.spacing(0, 2),
    },
}));

export const CustomGrid = ({ children }) => {
    return <Grid
        container
        justifyContent="center"
        direction="row"
        alignItems="center"
        columnSpacing={{ xs: 6, sm: 2, md: 2 }}
        key={'grid-container'}
    >
        {children}
    </Grid>
}
