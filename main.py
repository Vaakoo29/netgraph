import networkx as nx
import matplotlib.pyplot as plt
import numpy as np
import json


def main():
    with open('investments.json', 'r', encoding='utf-8') as file:
        data = json.load(file)

    G = nx.Graph()

    for project in data['projects']:
        G.add_node(project['id'], label=project['name'], weight=project['amount'], region=project['area'])
        for link in project['links']:
            G.add_edge(project['id'], link)

    print(G.nodes())

    print(list(G.nodes(data=True)))

    # Алгоритм, который высчитывает координаты вершин, чтобы выглядело норм
    pos = nx.kamada_kawai_layout(G)

    nx.draw_networkx_nodes(G, pos, node_color='yellow', node_size=10)
    nx.draw_networkx_labels(G, pos, font_size=11)
    nx.draw_networkx_edges(G, pos, edge_color='green', width=0.2)

    plt.axis('off')

    # plt.savefig('result.jpg')

    plt.show()

if __name__ == '__main__':
    main()
