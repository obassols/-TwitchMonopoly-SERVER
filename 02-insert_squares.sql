INSERT INTO SQUARE (id, name, short_name, type) VALUES (1, 'GO', 'GO', 'go');
INSERT INTO GO (square_id, amount) VALUES (1, 200);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (2, 'Mediterranean Avenue', 'MA', 'property');
INSERT INTO PROPERTY (square_id, color, price, house_price) VALUES (2, 'brown', 60, 50);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (2, 0, 2);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (2, 1, 10);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (2, 2, 30);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (2, 3, 90);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (2, 4, 160);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (2, 5, 250);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (3, 'Community Chest', 'CC1', 'community_chest');

INSERT INTO SQUARE (id, name, short_name, type) VALUES (4, 'Baltic Avenue', 'BA', 'property');
INSERT INTO PROPERTY (square_id, color, price, house_price) VALUES (4, 'brown', 60, 50);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (4, 0, 4);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (4, 1, 20);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (4, 2, 60);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (4, 3, 180);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (4, 4, 320);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (4, 5, 450);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (5, 'Income Tax', 'IT', 'tax');
INSERT INTO TAX (square_id, amount) VALUES (5, 200);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (6, 'Reading Railroad', 'RR1', 'station');
INSERT INTO STATION (square_id, price) VALUES (6, 200);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (6, 1, 25);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (6, 2, 50);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (6, 3, 100);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (6, 4, 200);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (7, 'Oriental Avenue', 'OA', 'property');
INSERT INTO PROPERTY (square_id, color, price, house_price) VALUES (7, 'light_blue', 100, 50);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (7, 0, 6);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (7, 1, 30);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (7, 2, 90);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (7, 3, 270);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (7, 4, 400);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (7, 5, 550);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (8, 'Chance', 'CH1', 'chance');

INSERT INTO SQUARE (id, name, short_name, type) VALUES (9, 'Vermont Avenue', 'VA1', 'property');
INSERT INTO PROPERTY (square_id, color, price, house_price) VALUES (9, 'light_blue', 100, 50);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (9, 0, 6);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (9, 1, 30);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (9, 2, 90);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (9, 3, 270);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (9, 4, 400);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (9, 5, 550);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (10, 'Connecticut Avenue', 'CA', 'property');
INSERT INTO PROPERTY (square_id, color, price, house_price) VALUES (10, 'light_blue', 120, 50);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (10, 0, 8);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (10, 1, 40);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (10, 2, 100);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (10, 3, 300);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (10, 4, 450);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (10, 5, 600);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (11, 'Jail', 'J', 'jail');
INSERT INTO JAIL (square_id, exit_cost) VALUES (11, 50);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (12, 'St. Charles Place', 'SCP', 'property');
INSERT INTO PROPERTY (square_id, color, price, house_price) VALUES (12, 'pink', 140, 100);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (12, 0, 10);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (12, 1, 50);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (12, 2, 150);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (12, 3, 450);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (12, 4, 625);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (12, 5, 750);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (13, 'Electric Company', 'EC', 'supply');
INSERT INTO SUPPLY (square_id, price) VALUES (13, 150);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (13, 1, 4);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (13, 2, 10);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (14, 'States Avenue', 'SA', 'property');
INSERT INTO PROPERTY (square_id, color, price, house_price) VALUES (14, 'pink', 140, 100);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (14, 0, 10);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (14, 1, 50);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (14, 2, 150);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (14, 3, 450);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (14, 4, 625);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (14, 5, 750);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (15, 'Virginia Avenue', 'VA2', 'property');
INSERT INTO PROPERTY (square_id, color, price, house_price) VALUES (15, 'pink', 160, 100);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (15, 0, 12);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (15, 1, 60);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (15, 2, 180);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (15, 3, 500);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (15, 4, 700);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (15, 5, 900);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (16, 'Pennsylvania Railroad', 'RR2', 'station');
INSERT INTO STATION (square_id, price) VALUES (16, 200);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (16, 1, 25);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (16, 2, 50);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (16, 3, 100);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (16, 4, 200);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (17, 'St. James Place', 'SJP', 'property');
INSERT INTO PROPERTY (square_id, color, price, house_price) VALUES (17, 'orange', 180, 100);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (17, 0, 14);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (17, 1, 70);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (17, 2, 200);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (17, 3, 550);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (17, 4, 750);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (17, 5, 950);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (18, 'Community Chest', 'CC2', 'community_chest');

INSERT INTO SQUARE (id, name, short_name, type) VALUES (19, 'Tennessee Avenue', 'TA', 'property');
INSERT INTO PROPERTY (square_id, color, price, house_price) VALUES (19, 'orange', 180, 100);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (19, 0, 14);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (19, 1, 70);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (19, 2, 200);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (19, 3, 550);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (19, 4, 750);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (19, 5, 950);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (20, 'New York Avenue', 'NYA', 'property');
INSERT INTO PROPERTY (square_id, color, price, house_price) VALUES (20, 'orange', 200, 100);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (20, 0, 16);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (20, 1, 80);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (20, 2, 220);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (20, 3, 600);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (20, 4, 800);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (20, 5, 1000);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (21, 'Free Parking', 'FP', 'free_parking');

INSERT INTO SQUARE (id, name, short_name, type) VALUES (22, 'Kentucky Avenue', 'KA', 'property');
INSERT INTO PROPERTY (square_id, color, price, house_price) VALUES (22, 'red', 220, 150);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (22, 0, 18);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (22, 1, 90);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (22, 2, 250);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (22, 3, 700);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (22, 4, 875);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (22, 5, 1050);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (23, 'Chance', 'CH2', 'chance');

INSERT INTO SQUARE (id, name, short_name, type) VALUES (24, 'Indiana Avenue', 'IA1', 'property');
INSERT INTO PROPERTY (square_id, color, price, house_price) VALUES (24, 'red', 220, 150);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (24, 0, 18);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (24, 1, 90);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (24, 2, 250);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (24, 3, 700);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (24, 4, 875);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (24, 5, 1050);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (25, 'Illinois Avenue', 'IA2', 'property');
INSERT INTO PROPERTY (square_id, color, price, house_price) VALUES (25, 'red', 240, 150);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (25, 0, 20);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (25, 1, 100);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (25, 2, 300);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (25, 3, 750);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (25, 4, 925);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (25, 5, 1100);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (26, 'B. & O. Railroad', 'RR3', 'station');
INSERT INTO STATION (square_id, price) VALUES (26, 200);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (26, 1, 25);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (26, 2, 50);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (26, 3, 100);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (26, 4, 200);


INSERT INTO SQUARE (id, name, short_name, type) VALUES (27, 'Atlantic Avenue', 'AA', 'property');
INSERT INTO PROPERTY (square_id, color, price, house_price) VALUES (27, 'yellow', 260, 150);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (27, 0, 22);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (27, 1, 110);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (27, 2, 330);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (27, 3, 800);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (27, 4, 975);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (27, 5, 1150);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (28, 'Ventnor Avenue', 'VA3', 'property');
INSERT INTO PROPERTY (square_id, color, price, house_price) VALUES (28, 'yellow', 260, 150);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (28, 0, 22);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (28, 1, 110);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (28, 2, 330);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (28, 3, 800);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (28, 4, 975);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (28, 5, 1150);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (29, 'Water Works', 'WW', 'supply');
INSERT INTO SUPPLY (square_id, price) VALUES (29, 150);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (29, 1, 4);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (29, 2, 10);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (30, 'Marvin Gardens', 'MG', 'property');
INSERT INTO PROPERTY (square_id, color, price, house_price) VALUES (30, 'yellow', 280, 150);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (30, 0, 24);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (30, 1, 120);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (30, 2, 360);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (30, 3, 850);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (30, 4, 1025);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (30, 5, 1200);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (31, 'Go To Jail', 'GTJ', 'go_to_jail');

INSERT INTO SQUARE (id, name, short_name, type) VALUES (32, 'Pacific Avenue', 'PA1', 'property');
INSERT INTO PROPERTY (square_id, color, price, house_price) VALUES (32, 'green', 300, 200);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (32, 0, 26);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (32, 1, 130);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (32, 2, 390);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (32, 3, 900);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (32, 4, 1100);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (32, 5, 1275);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (33, 'North Carolina Avenue', 'NCA', 'property');
INSERT INTO PROPERTY (square_id, color, price, house_price) VALUES (33, 'green', 300, 200);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (33, 0, 26);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (33, 1, 130);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (33, 2, 390);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (33, 3, 900);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (33, 4, 1100);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (33, 5, 1275);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (34, 'Community Chest', 'CC3', 'community_chest');

INSERT INTO SQUARE (id, name, short_name, type) VALUES (35, 'Pennsylvania Avenue', 'PA2', 'property');
INSERT INTO PROPERTY (square_id, color, price, house_price) VALUES (35, 'green', 320, 200);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (35, 0, 28);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (35, 1, 150);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (35, 2, 450);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (35, 3, 1000);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (35, 4, 1200);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (35, 5, 1400);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (36, 'Short Line', 'RR4', 'station');
INSERT INTO STATION (square_id, price) VALUES (36, 200);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (36, 1, 25);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (36, 2, 50);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (36, 3, 100);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (36, 4, 200);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (37, 'Chance', 'CH3', 'chance');

INSERT INTO SQUARE (id, name, short_name, type) VALUES (38, 'Park Place', 'PP', 'property');
INSERT INTO PROPERTY (square_id, color, price, house_price) VALUES (38, 'dark_blue', 350, 200);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (38, 0, 35);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (38, 1, 175);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (38, 2, 500);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (38, 3, 1100);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (38, 4, 1300);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (38, 5, 1500);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (39, 'Luxury Tax', 'LT', 'tax');
INSERT INTO TAX (square_id, price) VALUES (39, 100);

INSERT INTO SQUARE (id, name, short_name, type) VALUES (40, 'Boardwalk', 'BW', 'property');
INSERT INTO PROPERTY (square_id, color, price, house_price) VALUES (40, 'dark_blue', 400, 200);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (40, 0, 50);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (40, 1, 200);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (40, 2, 600);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (40, 3, 1400);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (40, 4, 1700);
INSERT INTO RENT_PRICE (square_id, upgrades, rent) VALUES (40, 5, 2000);