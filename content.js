let content = [
    {
        question: "Der erste Coronafall wurde in Deutschland nachgewiesen\n\nWas tust du?",
        answers: [
            {
                answer: "Der Chinavirus gibt es nicht. Das ist nur eine normale Grippewelle. Die kann uns nichts.",
                link: "https://www.spiegel.de/politik/ausland/nikol-paschinjan-armeniens-ministerpraesident-kuendigt-ruecktritt-an-a-1f5c3483-cee1-4749-8b05-927f0e056287",
                score:
                    {
                        economy: "100",
                        incidence: "5",
                        satisfaction: "-2"
                    }
            },
            {
                answer: "Eine Taskforce aufstellen und das Gesundheitsamt das Umfeld der Person auf weitere angesteckte Personen untersuchen",
                link: "https://www.spiegel.de/wirtschaft/ever-given-im-suezkanal-aegypten-bereitet-teilentladen-des-containerschiffs-vor-a-abdd9b9c-3e11-4acd-ba34-696eee7390df",
                score:
                    {
                        economy: "10",
                        incidence: "2",
                        satisfaction: "1"
                    }
            }
        ],
        days: 5
    },
    {
        question: "Georg Nüßlein hat 660.000€ Provision für die Vermittlung von Masken erhalten\nWie rechtfertigen sie dies?",
        link: "https://www.zdf.de/nachrichten/politik/maskenaffaere-ermittlungen-sauter-soeder-csu-100.html",
        answers: [
            {
                answer: "Die Journalisten sollte man am Besten wegsperren.",
                score:
                    {
                        economy: "-100",
                        incidence: "0",
                        satisfaction: "-2"
                    }
            },
            {
                answer: "Wir werden das \"untersuchen\"",
                score:
                    {
                        economy: "-100",
                        incidence: "0",
                        satisfaction: "-1"
                    }
            }
        ],
        days: 2
    },
    {
        question: "AstraZenica Impfstoff wirkt nur zu 75%",
        ref: 0,
        require: "04.04.2020",
        answers: [
            {
                answer: "Um die Pandemie zu besiegen müssen wir alles nehmen, was uns zur Verfügung steht. 75% sind besser als 0%.",
                score:
                    {
                        economy: "100",
                        incidence: "-2",
                        satisfaction: "2"
                    }
            },
            {
                answer: "75% sind viel zu wenig. Wir verklagen den Hersteller auf Schadensersatz.",
                score:
                    {
                        economy: "-10",
                        incidence: "3",
                        satisfaction: "-2"
                    }
            }
        ],
        days: 4
    },
    {
        question: "29 Millionen AstraZeneca Impfdosen wurden in Italien \"gefunden\"",
        link: "https://www.welt.de/politik/ausland/article229048609/AstraZeneca-29-Millionen-verschwundene-Dosen-in-Italien-aufgetaucht.html",
        require: 0,
        answers: [
            {
                answer: "Nanu?\nDas kann sich niemand erklären",
                score:
                    {
                        economy: "0",
                        incidence: "-1",
                        satisfaction: "0"
                    }
            },
            {
                answer: "Wir werden untersuchen, ob diese illegal nach Groß Britanien geliefert werden sollten",
                score:
                    {
                        economy: "-100",
                        incidence: "0",
                        satisfaction: "1"
                    }
            }
        ],
        days: 3
    },
    {
        question: "Ist dein Einkommen nicht ein bisschen zu gering?",
        event: 0,
        max: 25000,
        answers: [
            {
                answer: "Masken vermitteln und fette Provision kassieren",
                link: "https://www.mannheim24.de/mannheim/nikolas-loebel-mannheim-corona-masken-affaere-cdu-bundestag-ruecktritt-kretschmann-parteikrise-90230306.html",
                score:
                    {
                        economy: "1000",
                        incidence: "0",
                        satisfaction: "-20"
                    }
            },
            {
                answer: "Mir sind andere Dinge wichtiger",
                score:
                    {
                        economy: "0",
                        incidence: "0",
                        satisfaction: "5"
                    }
            }
        ],
        days: 1
    },
    {
        question: "Der Inzidenzwert ist viel zu hoch.\nWas beschließt du?",
        event: 1,
        min: 100,
        answers: [
            {
                answer: "Schulen schließen\nAusgangssperre ab 21 Uhr\nTreffen mit maximal einer Person",
                score:
                    {
                        economy: "-1000",
                        incidence: "-3",
                        satisfaction: "0"
                    }
            },
            {
                answer: "Grenzwert auf das doppelte erhöhen",
                score:
                    {
                        economy: "100",
                        incidence: "5",
                        satisfaction: "-10"
                    }
            }
        ]
    },
    {
        question: "Die Bürger würden dich nicht mehr wählen.\nWie verbessert du dein Image?",
        event: 2,
        max: 50,
        answers: [
            {
                answer: "Ich verspreche kostenlose Masken ohne dies vorher mit den Apotheken abgesprochen zu haben",
                score:
                    {
                        economy: "0",
                        incidence: "0",
                        satisfaction: "10"
                    }
            },
            {
                answer: "Um mein Image kann ich mich noch nach der Pandemie kümmern",
                score:
                    {
                        economy: "0",
                        incidence: "0",
                        satisfaction: "-10"
                    }
            }
        ],
        days: 3
    },
];