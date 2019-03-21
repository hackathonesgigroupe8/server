module.exports = {
    dataset: {
        "name": "Industrial pollution 2018",
        "id": "eea_ip_2018",
        countries: [
            {
                name: "France",
                code: "FR",
                topics: {1: "Pollution de l'air", 2: "Pollution de l'eau", 3: "Dechets", 4: "Dechets dangereux"},
                datas: [
                    {
                        "id": 1,
                        "sources": [{"Cadmium": 0.8}, {"Dioxyde de carbone": 0.37}, {"Plomb": 0.4}, {"Mercure": 0.82}, {"Oxyde d'Azote": 0.2}, {"Particule fine": 0.25}, {"Sulfure d'oxides": 0.77}]
                    },
                    {
                        "id": 2,
                        "sources": [
                            [{"Cadmium": 0.8}, {"Plomb": 0.46}, {"Mercure": 0.54}, {'Nickel': 0.2}, {'Azote': 0.18}, {"Carbone": 0.1}, {"Phosphore": 0.08}],
                        ]
                    },
                    {
                        "id": 3,
                        "sources": [
                            [{"Gestion des déchets": .0592}, {"Papier": 0.0153}, {"Metal": 0.0137}, {"Extraction": 0.0154}, {'Energie': 0.0012}, {'Chimique': 0.00118}, {"Industrie agro alimentaire": 0.0011}, {"Manifacture": 0.008}],
                        ]
                    },
                    {
                        "id": 4,
                        "sources": [
                            [{"Gestion des déchets": .392}, {"Papier": 0.0153}, {"Metal": 0.0137}, {"extraction": 0.0154}, {'Energie': 0.0012}, {'Chimique': 0.00118}, {"Industrie agro alimentaire": 0.0011}, {"Manifacture": 0.008}],
                        ]
                    },

                ],
            },
            {
                name: "Germany",
                code: "DE",
                topics: {1: "Luftverschmutzung", 2: "Wasserverschmutzung", 3: "Abfall", 4: "gefährlicher Abfall"},
                datas: [
                    {
                        "id": 1,
                        "sources": [{"Cadminium": 0.8}, {"Carbon dioxyde": 0.37}, {"Lead": 0.4}, {"Mercury": 0.82}, {"Nitrogen Oxyde": 0.2}, {"Particulate matter": 0.25}, {"Sulfure oxides": 0.77}]
                    },
                    {
                        "id": 2,
                        "sources": [
                            [{"Cadminium": 0.8}, {"Lead": 0.46}, {"Mercury": 0.54}, {'Nickel': 0.2}, {'Nitrogen': 0.18}, {"Organic carbon": 0.1}, {"Phosphorous": 0.08}],
                        ]
                    },
                    {
                        "id": 3,
                        "sources": [
                            [{"Waste managment": .0592}, {"Paper": 0.0153}, {"Metal": 0.0137}, {"Extractive": 0.0154}, {'Energy': 0.0012}, {'Chimicals': 0.00118}, {"Food industry": 0.0011}, {"Manifacturing": 0.008}],
                        ]
                    },
                    {
                        "id": 3,
                        "sources": [
                            [{"Waste managment": .392}, {"Paper": 0.0153}, {"Metal": 0.0137}, {"Extractive": 0.0154}, {'Energy': 0.0012}, {'Chimicals': 0.00118}, {"Food industry": 0.0011}, {"Manifacturing": 0.008}],
                        ]
                    },

                ],
            },
            {
                name: "Italy",
                code: "IT",
                topics: {1: "Inquinamento atmosferico", 2: "Inquinamento delle acque", 3: "Rifiuti", 4: "Rifiuti pericolosi"},
                datas: [
                    {
                        "id": 1,
                        "sources": [{"Cadminium": 0.8}, {"Carbon dioxyde": 0.37}, {"Lead": 0.4}, {"Mercury": 0.82}, {"Nitrogen Oxyde": 0.2}, {"Particulate matter": 0.25}, {"Sulfure oxides": 0.77}]
                    },
                    {
                        "id": 2,
                        "sources": [
                            [{"Cadminium": 0.8}, {"Lead": 0.46}, {"Mercury": 0.54}, {'Nickel': 0.2}, {'Nitrogen': 0.18}, {"Organic carbon": 0.1}, {"Phosphorous": 0.08}],
                        ]
                    },
                    {
                        "id": 3,
                        "sources": [
                            [{"Waste managment": .0592}, {"Paper": 0.0153}, {"Metal": 0.0137}, {"Extractive": 0.0154}, {'Energy': 0.0012}, {'Chimicals': 0.00118}, {"Food industry": 0.0011}, {"Manifacturing": 0.008}],
                        ]
                    },
                    {
                        "id": 3,
                        "sources": [
                            [{"Waste managment": .392}, {"Paper": 0.0153}, {"Metal": 0.0137}, {"Extractive": 0.0154}, {'Energy': 0.0012}, {'Chimicals': 0.00118}, {"Food industry": 0.0011}, {"Manifacturing": 0.008}],
                        ]
                    },

                ],
            },
            {
                name: "Great britain",
                code: "GB",
                topics: {1: "Air pollution", 2: "Water pollution", 3: "Waste", 4: "Dangerous waste"},
                datas: [
                    {
                        "id": 1,
                        "sources": [{"Cadminium": 0.8}, {"Carbon dioxyde": 0.37}, {"Lead": 0.4}, {"Mercury": 0.82}, {"Nitrogen Oxyde": 0.2}, {"Particulate matter": 0.25}, {"Sulfure oxides": 0.77}]
                    },
                    {
                        "id": 2,
                        "sources": [
                            [{"Cadminium": 0.8}, {"Lead": 0.46}, {"Mercury": 0.54}, {'Nickel': 0.2}, {'Nitrogen': 0.18}, {"Organic carbon": 0.1}, {"Phosphorous": 0.08}],
                        ]
                    },
                    {
                        "id": 3,
                        "sources": [
                            [{"Waste managment": .0592}, {"Paper": 0.0153}, {"Metal": 0.0137}, {"Extractive": 0.0154}, {'Energy': 0.0012}, {'Chimicals': 0.00118}, {"Food industry": 0.0011}, {"Manifacturing": 0.008}],
                        ]
                    },
                    {
                        "id": 3,
                        "sources": [
                            [{"Waste managment": .392}, {"Paper": 0.0153}, {"Metal": 0.0137}, {"Extractive": 0.0154}, {'Energy': 0.0012}, {'Chimicals': 0.00118}, {"Food industry": 0.0011}, {"Manifacturing": 0.008}],
                        ]
                    },

                ],
            },
            {
                name: "Spain",
                code: "ES",
                topics: {1: "Contaminacion del aire", 2: "Contaminación del agua", 3: "Residuos", 4: "Residuos peligrosos"},
                datas: [
                    {
                        "id": 1,
                        "sources": [{"Cadminium": 0.8}, {"Carbon dioxyde": 0.37}, {"Lead": 0.4}, {"Mercury": 0.82}, {"Nitrogen Oxyde": 0.2}, {"Particulate matter": 0.25}, {"Sulfure oxides": 0.77}]
                    },
                    {
                        "id": 2,
                        "sources": [
                            [{"Cadminium": 0.8}, {"Lead": 0.46}, {"Mercury": 0.54}, {'Nickel': 0.2}, {'Nitrogen': 0.18}, {"Organic carbon": 0.1}, {"Phosphorous": 0.08}],
                        ]
                    },
                    {
                        "id": 3,
                        "sources": [
                            [{"Waste managment": .0592}, {"Paper": 0.0153}, {"Metal": 0.0137}, {"Extractive": 0.0154}, {'Energy': 0.0012}, {'Chimicals': 0.00118}, {"Food industry": 0.0011}, {"Manifacturing": 0.008}],
                        ]
                    },
                    {
                        "id": 3,
                        "sources": [
                            [{"Waste managment": .392}, {"Paper": 0.0153}, {"Metal": 0.0137}, {"Extractive": 0.0154}, {'Energy': 0.0012}, {'Chimicals': 0.00118}, {"Food industry": 0.0011}, {"Manifacturing": 0.008}],
                        ]
                    },

                ],
            },
            {
                name: "Portugal",
                code: "PT",
                topics: {1: "Poluição do ar", 2: "Poluição da água", 3: "Desperdício", 4: "Resíduos perigosos"},
                datas: [
                    {
                        "id": 1,
                        "sources": [{"Cadminium": 0.8}, {"Carbon dioxyde": 0.37}, {"Lead": 0.4}, {"Mercury": 0.82}, {"Nitrogen Oxyde": 0.2}, {"Particulate matter": 0.25}, {"Sulfure oxides": 0.77}]
                    },
                    {
                        "id": 2,
                        "sources": [
                            [{"Cadminium": 0.8}, {"Lead": 0.46}, {"Mercury": 0.54}, {'Nickel': 0.2}, {'Nitrogen': 0.18}, {"Organic carbon": 0.1}, {"Phosphorous": 0.08}],
                        ]
                    },
                    {
                        "id": 3,
                        "sources": [
                            [{"Waste managment": .0592}, {"Paper": 0.0153}, {"Metal": 0.0137}, {"Extractive": 0.0154}, {'Energy': 0.0012}, {'Chimicals': 0.00118}, {"Food industry": 0.0011}, {"Manifacturing": 0.008}],
                        ]
                    },
                    {
                        "id": 3,
                        "sources": [
                            [{"Waste managment": .392}, {"Paper": 0.0153}, {"Metal": 0.0137}, {"Extractive": 0.0154}, {'Energy': 0.0012}, {'Chimicals': 0.00118}, {"Food industry": 0.0011}, {"Manifacturing": 0.008}],
                        ]
                    },

                ],
            },
        ]
    }
}