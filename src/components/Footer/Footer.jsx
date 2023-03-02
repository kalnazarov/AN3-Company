import React from "react";
import { createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";

import { Link, List, ListItem, Typography, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { color } from "@mui/system";

const Footer = () => {
    const navigate = useNavigate();

    const [openContact, setOpenContact] = React.useState(false);

    const handleContact = () => {
        setOpenContact(!openContact);
    };

    const [openCorporate, setOpenCorporate] = React.useState(false);

    const handleCorporate = () => {
        setOpenCorporate(!openCorporate);
    };

    const contact = [
        "Поддержка Авторов",
        "Опубликовать на сайте",
        "Вакансия",
        "Компания",
    ];
    const onas = [
        "AN-3 Company - Строительная и производственная компания, специализирующаяся на благоустройстве территорий, строительстве дорог и производстве тротуарной плитки.",
    ];
    const onas2 = ["Robo Recall", "Shadow Complex", "Unreal Tournament"];
    const corporate = [
        "Правила для неофициальных материалов",
        "Исследование пользовательского опыта",
        "Лицензионное соглашение с конечным пользователем магазина",
        "Сетевые службы",
        "Правила сообщества",
    ];

    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 1024,
                lg: 1200,
                xl: 1536,
            },
        },
    });

    // function hover(e) {
    //     e.after("red");
    // }

    return (
        <Box
            sx={{
                backgroundColor: "#111114",
                color: "#e5e7eb",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",

                    [theme.breakpoints.down("md")]: {
                        display: "block",
                    },
                    padding: "2% 5%",
                    fontSize: "15px",
                    textDecoration: "none",
                    fontFamily: "OpenSans,sans-serif",

                    border: "solid rgba(122,139,160,.3)",
                    borderWidth: "0 0 1px",
                    padding: "23px 0",
                    width: "97%",
                    margin: "0 auto",
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <Box sx={{ width: "45%" }}>
                        <Typography
                            sx={{
                                padding: "3px 10px",
                                color: "White",
                                fontSize: "30px",
                                [theme.breakpoints.down("md")]: {
                                    display: "none",
                                },
                                pb: "20px",
                            }}
                        >
                            О Компании
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "70%",
                                }}
                            >
                                <List
                                    sx={{
                                        [theme.breakpoints.down("md")]: {
                                            padding: "0",
                                        },
                                    }}
                                >
                                    {onas.map((i, index) => (
                                        <ListItem
                                            key={index}
                                            sx={{
                                                padding: "10px",
                                                margin: 0,
                                                [theme.breakpoints.down("md")]:
                                                    {
                                                        display: "none",
                                                    },
                                            }}
                                        >
                                            {
                                                <Link
                                                    sx={{
                                                        color: "gray",
                                                        fontSize: "18px",
                                                        cursor: "pointer",
                                                        transition: "0.5s",
                                                        textDecoration: "none",
                                                        fontFamily:
                                                            "revert-layer",
                                                        "&:hover": {
                                                            color: "#0099ff",
                                                        },
                                                    }}
                                                >
                                                    {i}
                                                </Link>
                                            }
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: "45%" }}>
                        <Typography
                            sx={{
                                padding: "3px 10px",
                                color: "White",
                                fontSize: "30px",
                                [theme.breakpoints.down("md")]: {
                                    display: "none",
                                },
                                pb: "20px",
                            }}
                        >
                            Контакты
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "70%",
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: "gray",
                                        fontFamily: "revert-layer",
                                        "&:hover": {
                                            color: "#0099ff",
                                        },
                                        fontSize: "18px",
                                    }}
                                >
                                    г. Астана, Проспект Маршала Жукова, д. 2
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "revert-layer",

                                        fontSize: "20px",
                                        color: "gray",
                                    }}
                                >
                                    Телефон:
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "revert-layer",
                                        "&:hover": {
                                            color: "#0099ff",
                                        },
                                        fontSize: "20px",
                                    }}
                                >
                                    +7 (495) 147-23-73
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "revert-layer",

                                        fontSize: "20px",
                                    }}
                                >
                                    WhatsApp
                                </Typography>
                                <Typography>
                                    Email:
                                </Typography>
                                <Typography>
                                    an3companykz@mail.ru
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box>
                    <List
                        className="icons"
                        sx={{
                            display: "flex",
                            width: "30%",
                            [theme.breakpoints.down("md")]: {
                                width: "15%",
                            },
                        }}
                    >
                        <ListItem>
                            <Link
                                className="icon-instagram"
                                href="https://www.instagram.com/an3companykz/"
                            >
                                <InstagramIcon
                                    sx={{
                                        color: "gray",
                                        "&:hover": {
                                            color: "#0099ff",
                                        },
                                    }}
                                />
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link
                                className="icon-twitter"
                                href="https://twitter.com/EpicGamesRU"
                            >
                                <TwitterIcon
                                    sx={{
                                        color: "gray",
                                        "&:hover": {
                                            color: "#0099ff",
                                        },
                                    }}
                                />
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link
                                className="icon-facebook"
                                href="https://www.facebook.com/epicgames/"
                            >
                                <FacebookIcon
                                    sx={{
                                        color: "gray",
                                        "&:hover": {
                                            color: "#0099ff",
                                        },
                                    }}
                                />
                            </Link>
                        </ListItem>
                    </List>
                </Box>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "80px",
                    paddingBottom: "50px",
                    paddingTop: "40px",
                    borderTopWidth: "1px",
                    borderColor: "white",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Typography sx={{ fontSize: "13px" }}>
                        © All Rights Reserved by AN-3 Company TOO
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
