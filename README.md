# Ferlið

## Tenging við þjónustu
Ég byrjaði á því að ná tengingu við veður þjónustuna fyrir ákveðna staðsetningu. Til þess notaði ég Fetch Api og kalla í þjónustuna eftir fyrsta render. Ég vildi til að byrja með einungis kalla í þjónustuna einu sinni þegar síðan hleður og kallaði því í hana í useEffect hook með dependency á api_url.

## Veður gögn í state
Veður gögnin eru geymd í state með useState hook. Ég tók þessa ákvörðun því mest virkni í síðunni er byggð á þessum gögnum.

## Umbreyta gögnum
Nú þegar gögnin voru kominn þá fannst mér nauðsynlegt að filtera þau eftir dögum, svo ég bjó til utility function - forecastByDay sem býr til nýjan array af gögnunum grúppuðum eftir dögum, svo það sé auðveldar að rendera lista af dögum sbr. hönnuninni.

## Component strúktúr
### App 
Sér um að sækja gögn og breyta þeim svo þau séu meðhöndlanlegri.

### WeatherList
Tekur við umbreyttum gögnum og sér um að birta lista af WeatherItem og sendir ákveðnar veðurupplýsingar í componentinn.

### WeatherItem
Eina sem WeatherItem gerir er að birta þær veðurupplýsingar sem koma inn (fyrir einn dag)

## Kröfur
Ég féll svolítið á tíma því miður, mín hugmynd var að ná að birta lista af veðurspá fyrir næstu daga fyrst og fremst því þá er krafa númer eitt nánast kominn (Dagleg veðurspá fyrir einhvern ákveðinn stað næstu 7 daga.), hinar kröfurnar voru í lægri forgangi hjá mér og eftir að krafa eitt er tilbúin þá myndi ég fara að hugsa um útlit og svo rest af kröfunum.


## Stílar
Eftir að ég hefði náð að birta hráa útgáfu af kröfu 1, þá hefði ég farið í að css-a og hefði ég líklega valið mér grid css til þess.
