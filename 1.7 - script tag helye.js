/*
Alapesetben amikor a böngésző egy weboldal betöltésekor találkozik egy külső fájlt belinkelő <script> taggel, akkor felfüggeszti a HTML-dokumentum betöltését, amíg le nem tölti és végre nem hajtja a szkriptfájlt.

Ez egyrészt megakasztja az oldal betöltését, másrészt fejlesztőként meg szeretnéd várni a dokumentumot, mielőtt módosítanád azt.

Emiatt sokáig az volt az elterjedt javaslat, hogy a <script> tageket a <body> rész végére kell beilleszteni. Azonban ebben az esetben csak a dokumentum teljes betöltését követően kezdődik el a szkriptek letöltése, ami szintén lassítja a weboldal megjelenését.

Az optimális megoldás az, ha a szkriptek letöltése a lehető leghamarabb elkezdődik, de közben folytatódik a dokumentum betöltése is.

Ezt teszik lehetővé a <script> tag esetében alkalmazható async és defer attribútumok. Az async attribútummal bíró szkripteket a letöltésük után azonnal végre is hajtja a böngésző, míg a defer attribútummal rendelkező szkripteket csak a dokumentum betöltését követően futtatja le.

!!!Azaz a <script> taget a <head> szekcióban ajánlott elhelyezni, az async vagy defer attribútum használata mellett.

A jQuery-kódodat tartalmazó .js fájlod <script> taggel történő belinkelésekor a defer attribútum alkalmazása javasolt, mert a jQuery csak akkor tud megfelelően működni, ha a teljes HTML-dokumentum betöltődött.
*/