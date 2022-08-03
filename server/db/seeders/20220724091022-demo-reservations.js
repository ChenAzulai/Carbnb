"use strict";
// new Date('1995-12-17T03:24:00');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Reservations", [
      {
        start_date: new Date("2022, 7, 1"),
        end_date: new Date("2022, 7, 21"),
        total_price: 500,
        start_time: new Date(),
        end_time: new Date(),
        user_id: 1,
        car_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        start_date: new Date("2022, 7, 30"),
        end_date: new Date("2022, 8, 3"),
        total_price: 200,
        start_time: new Date(),
        end_time: new Date(),
        user_id: 1,
        car_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        start_date: new Date("2022, 3, 1"),
        end_date: new Date("2022, 3, 18"),
        total_price: 500,
        start_time: new Date(),
        end_time: new Date(),
        user_id: 1,
        car_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        start_date: new Date("2022, 5, 2"),
        end_date: new Date("2022, 5, 7"),
        total_price: 500,
        start_time: new Date(),
        end_time: new Date(),
        user_id: 2,
        car_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        start_date: new Date("2022, 4, 3"),
        end_date: new Date("2022, 4, 6"),
        total_price: 500,
        start_time: new Date(),
        end_time: new Date(),
        user_id: 2,
        car_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        start_date: new Date("2022, 5, 27"),
        end_date: new Date("2022, 6, 1"),
        total_price: 500,
        start_time: new Date(),
        end_time: new Date(),
        user_id: 2,
        car_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        start_date: new Date("2022, 4, 4"),
        end_date: new Date("2022, 4, 5"),
        total_price: 500,
        start_time: new Date(),
        end_time: new Date(),
        user_id: 3,
        car_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        start_date: new Date("2021, 8, 19"),
        end_date: new Date("2022, 8, 24"),
        total_price: 500,
        start_time: new Date(),
        end_time: new Date(),
        user_id: 3,
        car_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        start_date: new Date("2022, 9, 1"),
        end_date: new Date("2022, 9, 3"),
        total_price: 500,
        start_time: new Date(),
        end_time: new Date(),
        user_id: 3,
        car_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        start_date: new Date("2022, 8, 11"),
        end_date: new Date("2022, 8, 15"),
        total_price: 500,
        start_time: new Date(),
        end_time: new Date(),
        user_id: 4,
        car_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        start_date: new Date("2020, 9, 3"),
        end_date: new Date("2020, 9, 8"),
        total_price: 500,
        start_time: new Date(),
        end_time: new Date(),
        user_id: 4,
        car_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        start_date: new Date("2020,5, 5"),
        end_date: new Date("2020, 5, 8"),
        total_price: 500,
        start_time: new Date(),
        end_time: new Date(),
        user_id: 4,
        car_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        start_date: new Date("2021, 7, 1"),
        end_date: new Date("2021, 7, 6"),
        total_price: 500,
        start_time: new Date(),
        end_time: new Date(),
        user_id: 4,
        car_id: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        start_date: new Date("2022, 3, 5"),
        end_date: new Date("2022, 3, 6"),
        total_price: 500,
        start_time: new Date(),
        end_time: new Date(),
        user_id: 5,
        car_id: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        start_date: new Date("2022, 7, 13"),
        end_date: new Date("2022, 7, 22"),
        total_price: 500,
        start_time: new Date(),
        end_time: new Date(),
        user_id: 5,
        car_id: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        start_date: new Date("2022, 8, 8"),
        end_date: new Date("2022, 8, 14"),
        total_price: 500,
        start_time: new Date(),
        end_time: new Date(),
        user_id: 5,
        car_id: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        start_date: new Date("2022, 5, 3"),
        end_date: new Date("2022, 5, 6"),
        total_price: 500,
        start_time: new Date(),
        end_time: new Date(),
        user_id: 1,
        car_id: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        start_date: new Date("2022, 12, 12"),
        end_date: new Date("2022, 12, 19"),
        total_price: 500,
        start_time: new Date(),
        end_time: new Date(),
        user_id: 6,
        car_id: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        start_date: new Date("2022, 12, 8"),
        end_date: new Date("2022, 12, 12"),
        total_price: 500,
        start_time: new Date(),
        end_time: new Date(),
        user_id: 7,
        car_id: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        start_date: new Date("2022, 11, 20"),
        end_date: new Date("2022, 12, 5"),
        total_price: 500,
        start_time: new Date(),
        end_time: new Date(),
        user_id: 1,
        car_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        start_date: new Date("2022, 12, 5"),
        end_date: new Date("2022, 12, 15"),
        total_price: 500,
        start_time: new Date(),
        end_time: new Date(),
        user_id: 2,
        car_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        start_date: new Date("2022, 2, 1"),
        end_date: new Date("2022, 2, 7"),
        total_price: 500,
        start_time: new Date(),
        end_time: new Date(),
        user_id: 3,
        car_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Reservations", null, {});
  },
};
