// src/core-layout/AppDrawer.tsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Box,
    Collapse,
    CssBaseline,
    Divider,
    Drawer,
    List,
    ListItem,
    Typography,
    ListItemButton,
    ListItemText,
} from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'

import {
    formsNoApi,
    formsJSONServerApi,
    formsMSWServerApi,
} from './app-drawer.constants'

const drawerWidth = 350

export default function AppDrawer() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedOpenIndex, setSelectedOpenIndex] = useState(0)

    const handleListItemClick = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        index: number
    ) => {
        setSelectedIndex(index)
    }

    const handleSelectedOpenClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number
    ) => {
        setSelectedOpenIndex(index)
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Divider />
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ m: 0 }}
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component="h1"
                        sx={{ p: 2 }}
                    >
                        REACT FORMS
                    </Typography>
                </Box>
                <Divider />
                <List>
                    <ListItemButton
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                        component={Link}
                        to="/"
                    >
                        <ListItemText primary="Home" />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton
                        onClick={(event) => handleSelectedOpenClick(event, 0)}
                    >
                        <ListItemText primary="Forms with no API" />
                        {selectedOpenIndex === 0 ? (
                            <ExpandLess />
                        ) : (
                            <ExpandMore />
                        )}
                    </ListItemButton>
                    <Divider />
                    <Collapse
                        in={selectedOpenIndex === 0}
                        timeout="auto"
                        unmountOnExit
                    >
                        <List>
                            {formsNoApi.map((item, index) => (
                                <ListItem key={item.label} disablePadding>
                                    <ListItemButton
                                        selected={selectedIndex === item.index}
                                        onClick={(event) =>
                                            handleListItemClick(
                                                event,
                                                item.index
                                            )
                                        }
                                        component={Link}
                                        to={item.path}
                                        sx={{ pl: 4 }}
                                    >
                                        <ListItemText primary={item.label} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>
                    <Divider />
                    <ListItemButton
                        onClick={(event) => handleSelectedOpenClick(event, 2)}
                    >
                        <ListItemText primary="Forms with JSON Server" />
                        {selectedOpenIndex === 2 ? (
                            <ExpandLess />
                        ) : (
                            <ExpandMore />
                        )}
                    </ListItemButton>
                    <Divider />
                    <Collapse
                        in={selectedOpenIndex === 2}
                        timeout="auto"
                        unmountOnExit
                    >
                        <List>
                            {formsJSONServerApi.map((item, index) => (
                                <ListItem key={item.label} disablePadding>
                                    <ListItemButton
                                        selected={selectedIndex === item.index}
                                        onClick={(event) =>
                                            handleListItemClick(
                                                event,
                                                item.index
                                            )
                                        }
                                        component={Link}
                                        to={item.path}
                                        sx={{ pl: 4 }}
                                    >
                                        <ListItemText primary={item.label} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>
                    <Divider />
                    <ListItemButton
                        onClick={(event) => handleSelectedOpenClick(event, 3)}
                    >
                        <ListItemText primary="Forms with Mock Service Worker" />
                        {selectedOpenIndex === 3 ? (
                            <ExpandLess />
                        ) : (
                            <ExpandMore />
                        )}
                    </ListItemButton>
                    <Divider />
                    <Collapse
                        in={selectedOpenIndex === 3}
                        timeout="auto"
                        unmountOnExit
                    >
                        <List>
                            {formsMSWServerApi.map((item, index) => (
                                <ListItem key={item.label} disablePadding>
                                    <ListItemButton
                                        selected={selectedIndex === item.index}
                                        onClick={(event) =>
                                            handleListItemClick(
                                                event,
                                                item.index
                                            )
                                        }
                                        component={Link}
                                        to={item.path}
                                        sx={{ pl: 4 }}
                                    >
                                        <ListItemText primary={item.label} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>
                </List>
            </Drawer>
        </Box>
    )
}
