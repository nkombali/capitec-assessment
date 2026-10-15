import BookingService from '../api/booking.service';

describe('Test Booking Service', ()=>{

    let token = '';

    it('Verify Auth is generated successfully', async ()=>{

        const payload = {
            "username" : "admin",
            "password" : "password123"
        };

        const authResponse = await BookingService.auth(payload);

        expect(authResponse.status).toBe(200);
        expect(authResponse.data).toHaveAttribute("token");
        expect(authResponse.data.token).not.toBeNull();

        token = authResponse.data.token;
    });

    it('Verify a booking can be placed successfully', async ()=>{

        const payload = {
            "firstname" : "Nkosinathi",
            "lastname" : "Mbali",
            "totalprice" : 454,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2026-01-01",
                "checkout" : "2026-10-31"
            },
            "additionalneeds" : "Breakfast"
        };

        const bookingResponse = await BookingService.createBooking(token, payload);

        expect(bookingResponse.status).toBe(200);
        expect(bookingResponse.data).toHaveAttribute("bookingid");
        expect(bookingResponse.data.bookingid).not.toBeNull();
    })
})