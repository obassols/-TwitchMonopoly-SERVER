-- This file is used to create the database and the tables
-- This database is used to store the data of the game and the accounts

-- This table is used to store the accounts
CREATE TABLE IF NOT EXISTS ACCOUNT (
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  twitch_token VARCHAR(255) NOT NULL,
  PRIMARY KEY (email)
);

-- RELATIONSHIP: account_email
-- This table is used to store the games
CREATE TABLE IF NOT EXISTS GAME (
  id SERIAL NOT NULL,
  account_email VARCHAR(255) NOT NULL,
  taxes INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (account_email) REFERENCES ACCOUNT(email)
);

-- RELATIONSHIP: game_id
-- This table is used to store the players of the game
CREATE TABLE IF NOT EXISTS PLAYER (
  position INT NOT NULL,
  game_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  money INT NOT NULL,
  role VARCHAR(50) NOT NULL,
  PRIMARY KEY (position, game_id),
  FOREIGN KEY (game_id) REFERENCES GAME(id)
);

-- This table is used to store all the cards of the game
CREATE TABLE IF NOT EXISTS CARD (
  id SERIAL NOT NULL,
  description TEXT NOT NULL,
  type VARCHAR(255) NOT NULL,
  action VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS PAY_CARD (
  card_id INT NOT NULL,
  amount INT NOT NULL,
  target VARCHAR(255) NOT NULL,
  PRIMARY KEY (card_id),
  FOREIGN KEY (card_id) REFERENCES CARD(id)
);

CREATE TABLE IF NOT EXISTS PAY_CONDITIONAL_CARD (
  card_id INT NOT NULL,
  amount_house INT NOT NULL,
  amount_hotel INT NOT NULL,
  PRIMARY KEY (card_id),
  FOREIGN KEY (card_id) REFERENCES CARD(id)
);

CREATE TABLE IF NOT EXISTS ADVANCE_CARD (
  card_id INT NOT NULL,
  square INT NOT NULL,
  PRIMARY KEY (card_id),
  FOREIGN KEY (card_id) REFERENCES CARD(id)
);

CREATE TABLE IF NOT EXISTS ADVANCE_CONDITIONAL_CARD (
  card_id INT NOT NULL,
  amount INT NOT NULL,
  PRIMARY KEY (card_id),
  FOREIGN KEY (card_id) REFERENCES CARD(id)
);

CREATE TABLE IF NOT EXISTS FREE_JAIL_CARD (
  card_id INT NOT NULL,
  sell_price INT NOT NULL,
  PRIMARY KEY (card_id),
  FOREIGN KEY (card_id) REFERENCES CARD(id)
);

-- This table is used to store the habilities of the game
CREATE TABLE IF NOT EXISTS HABILITY (
  id SERIAL NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  base_cooldown INT NOT NULL,
  PRIMARY KEY (id)
);

-- This table is used to store the squares of the game
CREATE TABLE IF NOT EXISTS SQUARE (
  id SERIAL NOT NULL,
  name VARCHAR(255) NOT NULL,
  short_name VARCHAR(50) NOT NULL,
  type VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- RELATIONSHIP: square_id  
-- This table is used to store the properties of the game
CREATE TABLE IF NOT EXISTS PROPERTY (
  square_id INT NOT NULL,
  color VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  house_price INT NOT NULL,
  PRIMARY KEY (square_id),
  FOREIGN KEY (square_id) REFERENCES SQUARE(id)
);

-- RELATIONSHIP: square_id
-- This table is used to store the stations of the game
CREATE TABLE IF NOT EXISTS STATION (
  square_id INT NOT NULL,
  price INT NOT NULL,
  PRIMARY KEY (square_id),
  FOREIGN KEY (square_id) REFERENCES SQUARE(id)
);

-- RELATIONSHIP: square_id
-- This table is used to store the supplies of the game
CREATE TABLE IF NOT EXISTS SUPPLY (
  square_id INT NOT NULL,
  price INT NOT NULL,
  PRIMARY KEY (square_id),
  FOREIGN KEY (square_id) REFERENCES SQUARE(id)
);

CREATE TABLE IF NOT EXISTS TAX (
  square_id INT NOT NULL,
  amount INT NOT NULL,
  PRIMARY KEY (square_id),
  FOREIGN KEY (square_id) REFERENCES SQUARE(id)
);

CREATE TABLE IF NOT EXISTS JAIL (
  square_id INT NOT NULL,
  exit_price INT NOT NULL,
  PRIMARY KEY (square_id),
  FOREIGN KEY (square_id) REFERENCES SQUARE(id)
);

CREATE TABLE IF NOT EXISTS GO (
  square_id INT NOT NULL,
  amount INT NOT NULL,
  PRIMARY KEY (square_id),
  FOREIGN KEY (square_id) REFERENCES SQUARE(id)
);

-- RELATIONSHIP: square_id
-- This table is used to store the rent prices of the game
CREATE TABLE IF NOT EXISTS RENT_PRICE (
  square_id INT NOT NULL,
  upgrades INT NOT NULL,
  rent INT NOT NULL,
  PRIMARY KEY (square_id, upgrades),
  FOREIGN KEY (square_id) REFERENCES SQUARE(id)
);


-- RELATIONSHIP: player_position, player_game_id
-- This table is used to store the actions of the player
CREATE TABLE IF NOT EXISTS PLAYER_ACTION (
  id SERIAL NOT NULL,
  player_position INT NOT NULL,
  player_game_id INT NOT NULL,
  action VARCHAR(255) NOT NULL,
  PRIMARY KEY (player_position, player_game_id, id),
  FOREIGN KEY (player_position, player_game_id) REFERENCES PLAYER(position, game_id)
);

-- RELATIONSHIP: player_position, player_game_id, card_id
-- This table is used to store the cards of the player
CREATE TABLE IF NOT EXISTS PLAYER_CARD (
  player_position INT NOT NULL,
  player_game_id INT NOT NULL,
  card_id INT NOT NULL,
  PRIMARY KEY (player_position, player_game_id, card_id),
  FOREIGN KEY (player_position, player_game_id) REFERENCES PLAYER(position, game_id),
  FOREIGN KEY (card_id) REFERENCES CARD(id)
);

--RELATIONSHIP: player_position, player_game_id
-- This table is used to store the habilities of the player
CREATE TABLE IF NOT EXISTS PLAYER_HABILITY (
  player_position INT NOT NULL,
  player_game_id INT NOT NULL,
  hability_id INT NOT NULL,
  cooldown INT NOT NULL,
  PRIMARY KEY (player_position, player_game_id, hability_id),
  FOREIGN KEY (player_position, player_game_id) REFERENCES PLAYER(position, game_id)
);

-- RELATIONSHIP: player_position, player_game_id, square_id
-- This table is used to store the squares of the player like properties, stations or supplies
CREATE TABLE IF NOT EXISTS PLAYER_SQUARE (
  player_position INT NOT NULL,
  player_game_id INT NOT NULL,
  square_id INT NOT NULL,
  upgrades INT NOT NULL,
  PRIMARY KEY (player_position, player_game_id, square_id),
  FOREIGN KEY (player_position, player_game_id) REFERENCES PLAYER(position, game_id),
  FOREIGN KEY (square_id) REFERENCES SQUARE(id)
);