Henry Meds Appointment System

Table of Contents
Introduction
Folder Structure
Usage
Client-Side Logic
Developer Notes

Introduction
The Reservation System is a web application designed to allow clients to view and reserve appointment slots provided by various service providers. It provides two user roles: clients and providers. Clients can view available appointment slots, select one, and confirm their reservation. Providers can add available time slots for clients to reserve.

Folder Structure
src: Contains the source code for the frontend application.
components: React components used throughout the application.
common: Shared utility functions, API, and types/interfaces.
mockData: Mock data used for testing and development.
App.js: Entry point of the application.
Home.js: Landing page component where users select their role.
ClientList.js: Component for displaying available and confirmed appointments for clients.
ProviderForm.js: Component for providers to add available time slots.
ReservationForm.js: Component for clients to make reservations.
Confirmation.js: Component for confirming reservations.
public: Static assets and HTML template.
README.md: Documentation for the project.

Usage
Clone the repository: git clone https://github.com/yourusername/reservation-system.git
Navigate to the project folder: cd reservation-system
Install dependencies: npm install
Start the development server: npm start

Client-Side Logic
Home.js: Landing page where users can select their role (client or provider).
ClientList.js: Displays available and confirmed appointments for clients.
ProviderForm.js: Allows providers to add available time slots.
ReservationForm.js: Lets clients make reservations for available slots.
Confirmation.js: Displays confirmation of a reservation.

Developer Notes
This application is built with React and uses React Router for navigation.