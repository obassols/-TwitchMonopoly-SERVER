INSERT INTO CARD (id, description, type, action) VALUES (1, 'The bank pays you $50', 'CHANCE', 'PAY');
INSERT INTO PAY_CARD (card_id, amount, target) VALUES (1, -50, 'BANK');

INSERT INTO CARD (id, description, type, action) VALUES (2, 'Pay for school fees of $150', 'CHANCE', 'PAY');
INSERT INTO PAY_CARD (card_id, amount, target) VALUES (2, 150, 'BANK');

INSERT INTO CARD (id, description, type, action) VALUES (3, 'Repair all your houses. $25 per house and $100 per hotel', 'CHANCE', 'PAY_CONDITIONAL');
INSERT INTO PAY_CONDITIONAL_CARD (card_id, amount_house, amount_hotel) VALUES (3, 25, 100);

INSERT INTO CARD (id, description, type, action) VALUES (4, 'You recived a rescue of $150', 'CHANCE', 'PAY');
INSERT INTO PAY_CARD (card_id, amount, target) VALUES (4, -150, 'BANK');

INSERT INTO CARD (id, description, type, action) VALUES (5, 'Pay for school fees of $150', 'CHANCE', 'PAY');
INSERT INTO PAY_CARD (card_id, amount, target) VALUES (5, 150, 'BANK');

INSERT INTO CARD (id, description, type, action) VALUES (6, 'Advance to Go. Collect $200', 'CHANCE', 'ADVANCE');
INSERT INTO ADVANCE_CARD (card_id, square) VALUES (6, 1);

INSERT INTO CARD (id, description, type, action) VALUES (7, 'Street repairs. $40 per house and $115 per hotel', 'CHANCE', 'PAY_CONDITIONAL');
INSERT INTO PAY_CONDITIONAL_CARD (card_id, amount_house, amount_hotel) VALUES (7, 40, 115);

INSERT INTO CARD (id, description, type, action) VALUES (8, 'Go to jail. Go directly to jail. Do not pass by the start. Do not collect $200', 'CHANCE', 'JAIL');

INSERT INTO CARD (id, description, type, action) VALUES (9, 'Advance to St. Charles Place. If you pass by the start, collect $200', 'CHANCE', 'ADVANCE');
INSERT INTO ADVANCE_CARD (card_id, square) VALUES (9, 12);

INSERT INTO CARD (id, description, type, action) VALUES (10, 'You are free to go. This card may be kept until needed or sold', 'CHANCE', 'FREE_JAIL');
INSERT INTO FREE_JAIL_CARD (card_id, sell_price) VALUES (10, 50);

INSERT INTO CARD (id, description, type, action) VALUES (11, 'Advance to Illinois Avenue. If you pass by the start, collect $200', 'CHANCE', 'ADVANCE');
INSERT INTO ADVANCE_CARD (card_id, square) VALUES (11, 25);

INSERT INTO CARD (id, description, type, action) VALUES (12, 'Retreat 3 squares', 'CHANCE', 'ADVANCE_CONDITIONAL');
INSERT INTO ADVANCE_CONDITIONAL_CARD (card_id, amount) VALUES (12, -3);

INSERT INTO CARD (id, description, type, action) VALUES (13, 'Sober up. Pay $20', 'CHANCE', 'PAY');
INSERT INTO PAY_CARD (card_id, amount, target) VALUES (13, 20, 'BANK');

INSERT INTO CARD (id, description, type, action) VALUES (14, 'You won a crossword competition. Collect $100', 'CHANCE', 'PAY');
INSERT INTO PAY_CARD (card_id, amount, target) VALUES (14, -100, 'BANK');

INSERT INTO CARD (id, description, type, action) VALUES (15, 'Speeding fine. Pay $15', 'CHANCE', 'PAY');
INSERT INTO PAY_CARD (card_id, amount, target) VALUES (15, 15, 'BANK');

INSERT INTO CARD (id, description, type, action) VALUES (16, 'Advance to Boardwalk', 'CHANCE', 'ADVANCE');
INSERT INTO ADVANCE_CARD (card_id, square) VALUES (16, 40);


INSERT INTO CARD (id, description, type, action) VALUES (17, 'Go to jail. Go directly to jail. Do not pass by the start. Do not collect $200', 'COMMUNITY_CHEST', 'JAIL');

INSERT INTO CARD (id, description, type, action) VALUES (18, 'Sold stock. Collect $50', 'COMMUNITY_CHEST', 'PAY');
INSERT INTO PAY_CARD (card_id, amount, target) VALUES (18, -50, 'BANK');

INSERT INTO CARD (id, description, type, action) VALUES (19, 'It is your birthday. Collect $10 from each player', 'COMMUNITY_CHEST', 'PAY');
INSERT INTO PAY_CARD (card_id, amount, target) VALUES (19, -10, 'PLAYER');

INSERT INTO CARD (id, description, type, action) VALUES (20, 'Tax refund. Collect $20', 'COMMUNITY_CHEST', 'PAY');
INSERT INTO PAY_CARD (card_id, amount, target) VALUES (20, -20, 'BANK');

INSERT INTO CARD (id, description, type, action) VALUES (21, 'Pay hospital fees of $100', 'COMMUNITY_CHEST', 'PAY');
INSERT INTO PAY_CARD (card_id, amount, target) VALUES (21, 100, 'BANK');

INSERT INTO CARD (id, description, type, action) VALUES (22, 'Bank error in your favor. Collect $200', 'COMMUNITY_CHEST', 'PAY');
INSERT INTO PAY_CARD (card_id, amount, target) VALUES (22, -200, 'BANK');

INSERT INTO CARD (id, description, type, action) VALUES (23, 'Pay your insurance premium of $50', 'COMMUNITY_CHEST', 'PAY');
INSERT INTO PAY_CARD (card_id, amount, target) VALUES (23, 50, 'BANK');

INSERT INTO CARD (id, description, type, action) VALUES (24, 'You recive an inheritance of $100', 'COMMUNITY_CHEST', 'PAY');
INSERT INTO PAY_CARD (card_id, amount, target) VALUES (24, -100, 'BANK');

INSERT INTO CARD (id, description, type, action) VALUES (25, 'You recive a consultancy fee of $25', 'COMMUNITY_CHEST', 'PAY');
INSERT INTO PAY_CARD (card_id, amount, target) VALUES (25, -25, 'BANK');

INSERT INTO CARD (id, description, type, action) VALUES (26, 'Advance to Go. Collect $200', 'COMMUNITY_CHEST', 'ADVANCE');
INSERT INTO ADVANCE_CARD (card_id, square) VALUES (26, 1);

INSERT INTO CARD (id, description, type, action) VALUES (27, 'Recive $100 for interest on your savings', 'COMMUNITY_CHEST', 'PAY');
INSERT INTO PAY_CARD (card_id, amount, target) VALUES (27, -100, 'BANK');

INSERT INTO CARD (id, description, type, action) VALUES (28, 'Pay medical fees of $50', 'COMMUNITY_CHEST', 'PAY');
INSERT INTO PAY_CARD (card_id, amount, target) VALUES (28, 50, 'BANK');

INSERT INTO CARD (id, description, type, action) VALUES (29, 'Pay a $10 fine', 'COMMUNITY_CHEST', 'PAY');
INSERT INTO PAY_CARD (card_id, amount, target) VALUES (29, 10, 'BANK');

INSERT INTO CARD (id, description, type, action) VALUES (30, 'You have won second prize in a beauty contest. Collect $10', 'COMMUNITY_CHEST', 'PAY');
INSERT INTO PAY_CARD (card_id, amount, target) VALUES (30, -10, 'BANK');

INSERT INTO CARD (id, description, type, action) VALUES (31, 'Retreat to Mediterranean Avenue', 'COMMUNITY_CHEST', 'ADVANCE');
INSERT INTO ADVANCE_CARD (card_id, square) VALUES (31, -2);

INSERT INTO CARD (id, description, type, action) VALUES (32, 'You are free to go. This card may be kept until needed or sold', 'COMMUNITY_CHEST', 'FREE_JAIL');
INSERT INTO FREE_JAIL_CARD (card_id, sell_price) VALUES (32, 50);