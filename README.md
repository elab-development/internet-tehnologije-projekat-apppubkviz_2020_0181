# Korišćene tehnologije
* Laravel
* React
* phpMyAdmin

# Kloniranje

`git clone https://github.com/elab-development/internet-tehnologije-projekat-apppubkviz_2020_0181 `

# Pokretanje - backend

Najpre otvoriti XAMPP i pokrenuti Apache i MySQL module.

Ukoliko nema prethodno importovane baze, uneti komande:
  *  `php artisan migrate`
  *  `php artisan db:seed`

Potom u terminalu uneti komandu `php artisan serve`, bez obzira da li je importovana prethodno kreirana baza ili su generisani novi podaci.

# Pokretanje - frontend

Uneti redom komande:

* `npm install`
* `npm start`

# Funkcionalnosti

Za neprijavljene korisnike - prikazivanje svih pub-kvizova, preuzimanje rezultata pub-kvizova koji su se održali, testiranje znanja, prijavljivanje korisnika i registracija korisnika.

Za prijavljene korisnike - sve funkcionalnosti neprijavljenih korisnika, odjava korisnika, kreiranje timova korisnika, prikaz timova korisnika, brisanje timova, prijava na pub kviz, prikaz svih prijavljenih pub kvizova i brisanje prijava za odredjeni pub kviz.

Za admine - uz funkcionalnosti prijavljenih korisnika, preuzimanje informacija o timovima koji su učestvovali na određenom pub kvizu kao i ažuriranje rezultata timova za određeni pub kviz.
