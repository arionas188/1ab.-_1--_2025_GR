(function () {
    // Όταν φορτώνει η σελίδα, ελέγχει το localStorage για τη γλώσσα
    document.addEventListener("DOMContentLoaded", function () {
        let savedLang = localStorage.getItem("language") || "gr"; // Default Ελληνικά
        changeLanguage(savedLang);
        setupBackToTopButton();
    });

    // Event listeners για τα κουμπιά αλλαγής γλώσσας
    document.getElementById("greek-btn").addEventListener("click", function () {
        changeLanguage("gr");
    });

    document.getElementById("english-btn").addEventListener("click", function () {
        changeLanguage("en");
    });

    function changeLanguage(lang) {
        let content = {
            "gr": {
                "title": "ΤΜΗΜΑ ΚΤΗΝΙΑΤΡΙΚΗΣ",
                "section": "📌 Τομέας Δομής & Λειτουργίας Ζωικών Οργανισμών - Εργαστήριο Ανατομικής, Ιστολογίας & Εμβρυολογίας",
                "rules_title1": "1.	ΥΓΙΕΙΝΗ ΚΑΙ ΑΣΦΑΛΕΙΑ ΤΩΝ ΦΟΙΤΗΤΩΝ ΚΑΙ ΤΩΝ ΕΡΓΑΖΟΜΕΝΩΝ ΣΤΙΣ ΑΙΘΟΥΣΕΣ ΑΝΑΤΟΜΩΝ",
                "rules_title2": "2.	ΥΓΙΕΙΝΗ ΚΑΙ ΑΣΦΑΛΕΙΑ ΤΩΝ ΕΡΓΑΖΟΜΕΝΩΝ ΣΤΟ ΕΡΓΑΣΤΗΡΙΟ ΙΣΤΟΛΟΓΙΑΣ",
                "rules": [
                    "🟠 • Όσοι εισέρχονται στην αίθουσα ανατομών να φοράνε ποδιά.",
                    "🟠 • Κατά τη διάρκεια των ανατομών οι μηχανισμοί εξαερισμού να είναι σε λειτουργία.",
                    "🟠 • Στα διαλείμματα, να ανοίγονται τα παράθυρα σε κάθε αίθουσα για να ανανεώνεται ο αέρας.",
                    "🟠 •	Τα γάντια και η μάσκα είναι απαραίτητα για την προστασία των φοιτητών και του προσωπικού κατά τη διάρκεια της άσκησης.",
                    "🟠 •	Για τα χρησιμοποιημένα νυστέρια να χρησιμοποιούνται οι ειδικοί συλλέκτες που υπάρχουν σε κάθε αίθουσα.",
                    "🟠 •	Οι αίθουσες ανατομών να διατηρούνται καθαρές.",
                    "🟠 •	Σε περιπτώσεις μικροτραυματισμών υπάρχει φαρμακείο στην αίθουσα Ιστολογίας.",
                    "🟠 •	Ιατρική βοήθεια παρέχεται από Γενικό Νοσοκομείο Καρδίτσας (Τμήμα Επειγόντων περιστατικών). Τηλ. επικοινωνίας  2441351520 / ΕΚΑΒ Τηλ. επικοινωνίας 166.",
                    "🟠 •	Σε περίπτωση πυρκαγιάς υπάρχει σύστημα πυρόσβεσης με νερό καθώς και πυροσβεστήρες ξηράς κόνεως στο διάδρομο κάθε ορόφου / ΠΥΡΟΣΒΕΣΤΙΚΗ Τηλ. επικοινωνίας 199."

                ],
                "rules2": [
                    "🟠 • Φόρμα εργασίας:Οι εργαζόμενοι κατά τη χρήση χημικών ουσιών να φορούν ποδιά και γάντια. Σε ειδικές περιπτώσεις (π.χ. κατά τη χρήση πτητικών ουσιών) είναι απαραίτητη η χρήση μάσκας.",
                    "🟠 •	Χρησιμοποίηση χημικών ουσιών: Πρέπει να γίνεται προσεκτικά και να λαμβάνονται υπ΄ όψιν οι επίσημες προειδοποιητικές ενδείξεις που υπάρχουν πάνω στη συσκευασία.",
                    "🟠 •	Η λήψη υγρών, ιδιαίτερα διαλυμάτων οξέων, με σιφώνια γίνεται με ελαστικά πουάρ και όχι με σιφωνισμό από το στόμα.",
                    "🟠 •	Οι ουσίες που ατμίζουν ή παράγουν ατμούς κατά το βρασμό τοποθετούνται μέσα στους απαγωγούς έτσι ώστε να μειώνεται σημαντικά η έκθεση των εργαζομένων σε τοξικές και επικίνδυνες ουσίες.",
                    "🟠 •	Η χρήση εύφλεκτων ουσιών πρέπει να γίνεται με ιδιαίτερη προσοχή!",
                    "🟠 •	Διαχείριση αποβλήτων:</strong>Υδατοδιαλυτές χημικές ουσίες, οξέα, αλκάλεα, άλατα κ.λ.π. μπορούν να αποβληθούν στο σύστημα αποχέτευσης και να εκπλυθούν με μεγάλη ποσότητα νερού. ",
                    "🟠 •	Το τετροξείδιο του οσμίου, αλλά και τα βαρέα μέταλλα όπως είναι το ουρανύλιο και ο μόλυβδος, συλλέγονται σε ειδικά δοχεία προς αποφυγή της ρύπανσης του υδάτινου περιβάλλοντος.",
                    "🟠 •	Στερεά απόβλητα, διηθητικά χαρτιά, υπολείμματα ουσιών, άδεια πλαστικά και γυάλινα φιαλίδια και μπουκάλια χημικών ουσιών τοποθετούνται σε πλαστικούς σάκους σκουπιδιών.",
                    "🟠 •	Σπασμένα γυαλικά, σύριγγες και μυτερά αντικείμενα τοποθετούνται προσεκτικά σε κάδους με την αντίστοιχη ένδειξη.",
                    "🟠 •	Χειρισμός μηχανημάτων: Πρέπει να γίνεται σύμφωνα με τις οδηγίες της κατασκευαστικής εταιρείας σε ότι  αφορά τον χειρισμό και την ασφάλεια του χειριστή. ",
                    "🟠 •	Πρώτες βοήθειες: Σε περιπτώσεις μικροτραυματισμών υπάρχει φαρμακείο στην αίθουσα Ιστολογίας. ",
                    "🟠 •	Ιατρική βοήθεια παρέχεται από Γενικό Νοσοκομείο Καρδίτσας (Τμήμα Επειγόντων περιστατικών). Τηλ.Cεπικοινωνίας  2441351520 / ΕΚΑΒ Τηλ. επικοινωνίας 166.",
                    "🟠 •	Σε περίπτωση πυρκαγιάς υπάρχει σύστημα πυρόσβεσης με νερό καθώς και πυροσβεστήρες ξηράς κόνεως στο διάδρομο κάθε ορόφου / ΠΥΡΟΣΒΕΣΤΙΚΗ Τηλ. επικοινωνίας 199."

                ],
                "cautionTitle": "Προσοχή!",
                "cautionParagraph": "Ο χώρος του εργαστηρίου καθώς και τα μηχανήματα πρέπει να διατηρούνται καθαρά."

            },
            "en": {
                "title": "ΤΜΗΜΑ ΚΤΗΝΙΑΤΡΙΚΗΣ",
                "section": "📌 FACULTY OF VETERINARY MEDICINΕ DIVISION OF ANIMAL STRUCTURE AND FUNCTION Laboratory of Anatomy, Histology and Embryology",
                "rules_title1": "1. HYGIENE AND SAFETY OF THE STUDENTS AND THE STAFF IN ANATOMY ROOM",
                "rules_title2": "2. HYGIENE AND SAFETY OF STUDENTS AND   STAFF IN THE LABORATORY OF HISTOLOGY",
                "rules": [
                    "🟠 • Students must wear apron as soon as they enter the dissection room",
                    "🟠 • During dissection the ventilation equipment must be activated.",
                    "🟠 • During break, the windows must open wide in order to refresh the rooms. ",
                    "🟠 • The gloves and the face mask are essential for the protection of students and staff during the practice.",
                    "🟠 • The used scalpels must be discarded in special containers which are placed in the anatomy room.",
                    "🟠 • The anatomy room must be maintained clean.",
                    "🟠 • In case of small injuries there is first-aid kit.",
                    "🟠 • Medical assistance is provided at General Hospital of Karditsa (Emergency Care Unit). Telephone: 2441351520 / ΕΚΑΒ (National Service of Emergency Care) Telephone: 166.",
                    "🟠 • In case of fire. A Dry powder extinguisher exists on the room / Fire Service Telephone: 199."

                ],
                "rules2": [
                    "🟠 • Workwear: The staff must wear apron and gloves during the handling of chemical compounds. In special conditions (e.g. use of volatile compounds) the use of face mask is essential.",
                    "🟠 • Use of chemical substances: The handling must be carried out with precaution and must be taken into account the official warning indications of the packaging of the relevant compounds.",
                    "🟠 • The liquid transfer, especially acid solutions, must be performed with laboratory pipettes.",
                    "🟠 • Vaporous compounds or compounds which produce steam during boiling, are placed in fume cupboard in order to significantly reduce the staff exposure to toxic and hazardous substances.",
                    "🟠 • Use of flammable substances must be carried out with special precaution!",
                    "🟠 • Waste management: Water soluble chemical compounds, acids, alkalia, salts etc. can be expelled in the sewerage and can be washed out with a big quantity of water.",
                    "🟠 • Osmium tetroxide, but also heavy metals such as uranyl and lead, are collected in special containers in order to avoid the pollution of aquatic environment.",
                    "🟠 • Solid waste products, filter papers, chemical residues, empty plastic and glassbottles and containers of chemical compounds are deposited in plastic trash bags.",
                    "🟠 • Broken glass, syringes and   sharp objects are placed carefully in buckets with relevant labelling.",
                    "🟠 • Operation of devices: Must be conducted according to the guidelines of the manufacturer regarding the handling and the safety of the operator.",
                    "🟠 • First aid: In case of small injuries in the microscopy room, a first aid kit exists. ",
                    "🟠 • Medical assistance is provided at the General Hospital of Karditsa (Emergency Care Unit). Telephone: 2441351520 / ΕΚΑΒ (National Service of Emergency Care) Telephone: 166.",
                    "🟠 • In case of fire, a Dry powder extinguisher exists in the room / Fire Service Telephone: 199."

                ],
                "cautionTitle": "Attention!",
                "cautionParagraph": "The laboratory room and the equipment must be maintained clean."
            }
        };

       // Αποθηκεύουμε τη γλώσσα στο localStorage
       localStorage.setItem("language", lang);

        // Επιλογή στοιχείων που θα αλλάξουν
        let title = document.querySelector("h1");
        let section = document.querySelector("h5");
        let rulesTitle1 = document.querySelectorAll(".rules h2")[0];
        let rulesTitle2 = document.querySelectorAll(".rules h2")[1];
        let rulesList1 = document.querySelectorAll(".rules ul")[0].querySelectorAll("li");
        let rulesList2 = document.querySelectorAll(".rules ul")[1].querySelectorAll("li");
        let cautionTitle = document.querySelector(".rules h4");
        let cautionParagraph = document.querySelector(".rules p");

       // Προσθέτουμε fade-out effect
       document.body.classList.add("fade-out");

        setTimeout(() => {

                // Αλλαγή περιεχομένου
                document.title = content[lang].title;
                title.textContent = content[lang].title;
                section.textContent = content[lang].section;
                rulesTitle1.textContent = content[lang].rules_title1;
                rulesTitle2.textContent = content[lang].rules_title2;
                cautionTitle.textContent = content[lang].cautionTitle;
                cautionParagraph.textContent = content[lang].cautionParagraph;

                // Αλλαγή των κανόνων στο πρώτο σετ κανόνων
                content[lang].rules.forEach((text, index) => {
                    if (rulesList1[index]) {
                        rulesList1[index].innerHTML = text;
                    }
                });

                // Αλλαγή των κανόνων στο δεύτερο σετ κανόνων
                content[lang].rules2.forEach((text, index) => {
                    if (rulesList2[index]) {
                        rulesList2[index].innerHTML = text;
                    }
                });

                // Επαναφορά opacity μετά την αλλαγή (fade-in)
                document.body.classList.remove("fade-out");
            }, 300);
        }
        
   function setupBackToTopButton() {
       let backToTopBtn = document.getElementById("backToTop");

       window.addEventListener("scroll", function () {
           if (window.scrollY > 200) {
               backToTopBtn.style.display = "block";
           } else {
               backToTopBtn.style.display = "none";
           }
       });

       backToTopBtn.addEventListener("click", function () {
           window.scrollTo({ top: 0, behavior: "smooth" });
       });
   }
})();